const {
    traverse,
    genStyleClass,
    parseStyle,
    parseProps,
    parseLoop,
    parseCondition,
    toString,
    parseCSS3LinearGradientToRNProps,
    parseSourceProps
} = require("./utils")
const { getPageCode, getComponentCode, getFileCode } = require("./codeTemplate")

module.exports = function (schema, option) {
    const { prettier } = option

    // imports
    const imports = []
    // inline style
    const style = {}
    // Global Public Functions
    const utils = []
    // Classes
    const classes = []

    // 样式名处理：指定命名风格 - 驼峰命名
    traverse(schema, json => {
        if (json.props && json.props.className) {
            json.props.className = genStyleClass(
                json.props.className,
                "camelCase"
            )
        }
    })

    // 生成 render jsx
    const generateRender = schema => {
        const type = schema.componentName.toLowerCase()
        const className = schema.props && schema.props.className
        let classString = ""

        // 处理样式
        if (className) {
            classString = ` style={styles.${className}}`
            style[className] = parseStyle(schema.props.style, type)
        } else if (schema.props.style) {
            classString = ` style={${toString(
                parseStyle(schema.props.style, type)
            )}}`
        }

        // 处理组件属性
        let xml
        let props = ""

        Object.keys(schema.props).forEach(key => {
            if (
                ["className", "style", "text", "src", "lines"].indexOf(key) ===
                -1
            ) {
                props += ` ${key}={${parseProps(schema.props[key])}}`
            }
        })

        // 组件映射转换（组件名、组件属性）
        switch (type) {
            case "text":
                {
                    const innerText = parseProps(schema.props.text, true)
                    const lines = schema.props.lines
                    if (lines && lines > 1) {
                        props += ` numberOfLines={${lines}}`
                    }
                    xml = `<Text${classString}${props}>${innerText}</Text>`
                }
                break
            case "image":
                {
                    const source = parseSourceProps(schema.props.src)
                    xml = `<Image${classString}${props} source={${source}} />`
                }
                break
            case "div":
            case "page":
            case "block":
                {
                    let compName = "View"

                    if (
                        schema.props.style &&
                        schema.props.style["backgroundImage"]
                    ) {
                        const backgroundImageValue =
                            schema.props.style["backgroundImage"]
                        if (backgroundImageValue.startsWith("url(")) {
                            const sources =
                                backgroundImageValue.match(
                                    /(?<=url\().*(?=\))/g
                                )
                            if (sources && sources.length == 1) {
                                // 背景图片，使用 ImageBackground
                                compName = "ImageBackground"
                                const source = parseSourceProps(sources[0])
                                props += ` source={${source}}`
                            }
                        } else if (
                            backgroundImageValue.startsWith("linear-gradient(")
                        ) {
                            const _props =
                                parseCSS3LinearGradientToRNProps(
                                    backgroundImageValue
                                )
                            // console.log("_props=",_props)
                            if (_props) {
                                // 渐变背景色，使用 react-native-linear-gradient
                                compName = "LinearGradient"
                                Object.keys(_props).forEach(key => {
                                    props += ` ${key}={${toString(
                                        _props[key]
                                    )}}`
                                })
                                const _import = `import LinearGradient from "react-native-linear-gradient"`
                                if (imports.indexOf(_import) == -1) {
                                    imports.push(_import)
                                }
                            }
                        }
                    }

                    if (schema.children && schema.children.length) {
                        xml = `<${compName}${classString}${props}>${transform(
                            schema.children
                        )}</${compName}>`
                    } else {
                        xml = `<${compName}${classString}${props} />`
                    }
                }
                break
        }

        // 逻辑处理（暂时没用到）
        if (schema.loop) {
            xml = parseLoop(schema.loop, schema.loopArgs, xml)
        }
        if (schema.condition) {
            xml = parseCondition(schema.condition, xml)
        }
        if (schema.loop || schema.condition) {
            xml = `{${xml}}`
        }

        return xml
    }

    // 递归处理 schema
    const transform = schema => {
        let result = ""

        if (Array.isArray(schema)) {
            schema.forEach(layer => {
                result += transform(layer)
            })
        } else {
            const type = schema.componentName.toLowerCase()

            if (["page", "block"].indexOf(type) !== -1) {
                // 容器组件处理: state/method/dataSource/lifeCycle/render
                const _componentName = `${schema.componentName}_${classes.length}`

                let classData = ""

                if (type == "page") {
                    classData = getPageCode(
                        _componentName,
                        generateRender(schema),
                        style
                    )
                } else {
                    classData = getComponentCode(
                        _componentName,
                        generateRender(schema)
                    )
                }

                classes.push(classData)

                result += `<${_componentName}/>`
            } else {
                result += generateRender(schema)
            }
        }

        return result
    }

    // 转换代码
    transform(schema)

    const prettierOpt = {
        parser: "babel",
        printWidth: 120,
        singleQuote: true
    }

    const code = getFileCode(imports, utils, classes, style)

    return {
        panelDisplay: [
            {
                panelName: `index.jsx`,
                panelValue: prettier.format(code, prettierOpt),
                panelType: "js"
            }
        ],
        noTemplate: true
    }
}
