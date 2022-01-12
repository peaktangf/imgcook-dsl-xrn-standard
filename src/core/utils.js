const camelCase = require("lodash/camelCase")
const kebabCase = require("lodash/kebabCase")
const snakeCase = require("lodash/snakeCase")

// 遍历节点
export const traverse = (json, callback) => {
    if (Array.isArray(json)) {
        json.forEach(node => {
            traverse(node, callback)
        })
        return
    }

    // 去除 class 空格
    if (json && callback) {
        callback(json)
    }

    if (
        json.children &&
        json.children.length > 0 &&
        Array.isArray(json.children)
    ) {
        json.children.forEach(child => {
            traverse(child, callback)
        })
    }
}

export const isExpression = value => {
    return /^\{\{.*\}\}$/.test(value)
}

export const toString = value => {
    if ({}.toString.call(value) === "[object Function]") {
        return value.toString()
    }
    if (typeof value === "string") {
        return value
    }
    if (typeof value === "object") {
        return JSON.stringify(value, (key, value) => {
            if (typeof value === "function") {
                return value.toString()
            } else {
                return value
            }
        })
    }

    return String(value)
}

// parse function, return params and content
export const parseFunction = func => {
    const funcString = func.toString()
    // eslint-disable-next-line no-useless-escape
    const params = funcString.match(/\([^\(\)]*\)/)[0].slice(1, -1)
    const content = funcString.slice(
        funcString.indexOf("{") + 1,
        funcString.lastIndexOf("}")
    )
    return {
        params,
        content
    }
}

// parse layer props(static values or expression)
export const parseProps = (value, isReactNode) => {
    if (typeof value === "string") {
        if (isExpression(value)) {
            if (isReactNode) {
                return value.slice(1, -1)
            } else {
                return value.slice(2, -2)
            }
        }

        if (isReactNode) {
            return value
        } else {
            return `'${value}'`
        }
    } else if (typeof value === "function") {
        const { params, content } = parseFunction(value)
        return `(${params}) => {${content}}`
    }
}

// parse async dataSource
export const parseDataSource = data => {
    const name = data.id
    const { uri, params } = data.options
    const action = data.type
    let payload = {}

    Object.keys(data.options).forEach(key => {
        if (["uri", "method", "params"].indexOf(key) === -1) {
            payload[key] = toString(data.options[key])
        }
    })

    // params parse should in string template
    if (params) {
        payload = `${toString(payload).slice(0, -1)} ,body: ${
            isExpression(params) ? parseProps(params) : toString(params)
        }}`
    } else {
        payload = toString(payload)
    }

    let result = `{
    ${action}(${parseProps(uri)}, ${toString(payload)})
      .then((response) => response.json())
  `

    if (data.dataHandler) {
        const { params, content } = parseFunction(data.dataHandler)
        result += `.then((${params}) => {${content}})
      .catch((e) => {
        console.log('error', e);
      })
    `
    }

    result += "}"

    return `function ${name}() ${result}`
}

// parse condition: whether render the layer
export const parseCondition = (condition, render) => {
    if (typeof condition === "boolean") {
        return `${condition} && ${render}`
    } else if (typeof condition === "string") {
        return `${condition.slice(2, -2)} && ${render}`
    }
}

// parse loop render
export const parseLoop = (loop, loopArg, render) => {
    let data
    let loopArgItem = (loopArg && loopArg[0]) || "item"
    let loopArgIndex = (loopArg && loopArg[1]) || "index"

    if (Array.isArray(loop)) {
        data = toString(loop)
    } else if (isExpression(loop)) {
        data = loop.slice(2, -2)
    }

    // add loop key
    const tagEnd = render.match(/^<.+?\s/)[0].length
    render = `${render.slice(0, tagEnd)} key={${loopArgIndex}}${render.slice(
        tagEnd
    )}`

    // remove `this`
    const re = new RegExp(`this.${loopArgItem}`, "g")
    render = render.replace(re, loopArgItem)

    return `${data}.map((${loopArgItem}, ${loopArgIndex}) => {
    return (${render});
  })`
}

export const genStyleClass = (string, type) => {
    let classArray = string.split(" ") // 兼容存在多个类 class 的情况
    classArray = classArray.filter(name => !!name)
    classArray = classArray.map(name => {
        // 将样式名转换为对应的风格
        switch (type) {
            case "camelCase":
                return camelCase(name)
            case "kebabCase":
                return kebabCase(name)
            case "snakeCase":
                return snakeCase(name)
            default:
                return camelCase(name)
        }
    })
    return classArray.join(" ")
}

// convert to responsive unit, such as vw
export const parseStyle = (_style, componentName) => {
    let style = JSON.parse(JSON.stringify(_style))

    if (componentName === "text") {
        delete style.width
        delete style.height
        delete style.maxWidth
    }

    // RN 组件默认样式
    const defaultStyle = {
        fontWeight: 400,
        fontSize: 14,
        fontFamily: "PingFang SC",
        color: "#333333",
        display: "flex",
        flexDirection: "column"
    }
    // 过滤默认样式字段
    Object.keys(style).forEach(key => {
        if (style[key] == defaultStyle[key]) {
            delete style[key]
        }
    })

    for (let key in style) {
        switch (key) {
            case "fontWeight":
                style[key] = String(style[key])
                break
            case "fontSize":
                style[key] = parseFloat(style[key])
                break
            case "opacity":
                style[key] = Number(style[key])
                break
            case "lineHeight":
                {
                    // RN 行高和字号的最佳比例
                    const fontSize = style["fontSize"] || 14
                    const lineHeight = style["lineHeight"]
                    if (
                        lineHeight &&
                        parseFloat(lineHeight) < parseFloat(fontSize) * 1.4
                    ) {
                        style[key] = String(parseFloat(fontSize * 1.4))
                    }
                }
                break
            case "boxSizing":
            case "boxShadow":
            case "textOverflow":
            case "backgroundSize":
            case "backgroundImage":
            case "whiteSpace":
                delete style[key]
                break
            default:
                if (/[0-9]+px/.test(style[key])) {
                    style[key] = parseFloat(style[key])
                }
        }
    }

    // 样式转换为 rpx
    style = styleToRpx(style)

    return style
}

/**
 * 样式转换为rpx
 * @param {*} style
 * @returns
 */
export const styleToRpx = style => {
    const resultStyle = {}
    for (let key in style) {
        switch (key) {
            case "fontSize":
            case "marginTop":
            case "marginBottom":
            case "paddingTop":
            case "paddingBottom":
            case "height":
            case "top":
            case "bottom":
            case "width":
            case "maxWidth":
            case "left":
            case "right":
            case "paddingRight":
            case "paddingLeft":
            case "marginLeft":
            case "marginRight":
            case "lineHeight":
            case "borderBottomRightRadius":
            case "borderBottomLeftRadius":
            case "borderTopRightRadius":
            case "borderTopLeftRadius":
            case "borderWidth":
            case "borderRadius":
                {
                    const value = parseFloat(style[key])
                    if (!isNaN(value)) {
                        resultStyle[key] = `rpx(${roundFun(value)})`
                    }
                }
                break
            default:
                resultStyle[key] = style[key]
        }
    }

    return resultStyle
}

/**
 * 处理数字，保留固定小数位
 * @param {*} value
 * @param {*} decNum
 * @returns
 */
export const roundFun = (value, decNum = 2) => {
    return Math.round(value * Math.pow(10, decNum)) / Math.pow(10, decNum)
}

/**
 * 将 css3 的 linear-gradient 解析为 RN 对应的属性
 * RN端采用 react-native-linear-gradient 组件
 * @param {*} value
 */
export const parseCSS3LinearGradientToRNProps = value => {
    // 提取表达式的值
    const a = value.slice("linear-gradient(".length).slice(0, -1)

    // 将值用空格分割为数组，然后依次提取
    let start = { x: 0, y: 0 },
        end = { x: 1, y: 0 },
        colors = [],
        locations = []
    a.split(" ").map(item => {
        let _item = item
        // 去掉每个item最后的,号
        if (_item.endsWith(",")) {
            _item = _item.slice(0, -1)
        }

        if (_item.endsWith("deg")) {
            let angle = (_item.match(/\d*(?=deg)/g) || [])[0]
            const angleRad = ((angle - 90) * Math.PI) / 180 // 角度 转 弧度
            const length = Math.sqrt(2)
            const size = {
                width: Math.cos(angleRad) * length,
                height: Math.sin(angleRad) * length
            }
            const _angleCenter = { x: 0.5, y: 0.5 }
            start = {
                x: roundFun(_angleCenter.x - size.width / 2),
                y: roundFun(_angleCenter.y - size.height / 2)
            }
            end = {
                x: roundFun(_angleCenter.x + size.width / 2),
                y: roundFun(_angleCenter.y + size.height / 2)
            }
        } else if (_item.indexOf("%") != -1) {
            // 限定值的范围为 0 - 1
            locations.push(Math.min(Math.max(parseFloat(_item) / 100, 0), 1))
        } else {
            colors.push(_item)
        }
    })
    if (colors.length > 0) {
        return {
            start,
            end,
            colors,
            locations
        }
    }
    return null
}

/**
 * 解析 RN 图片 source 属性
 * @param {*} url
 * @returns
 */
export const parseSourceProps = url => {
    if (!url) {
        return `{ uri: "" }`
    }
    if (url.startsWith("http")) {
        return `{ uri: "${url}" }`
    } else {
        return `require("${url}")`
    }
}
