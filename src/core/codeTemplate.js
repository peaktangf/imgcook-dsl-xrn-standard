const { toString } = require("./utils")

/**
 * 根据模板获取 page 代码
 * @param {*} pageName
 * @param {*} renderContent
 * @param {*} style
 * @returns
 */
export const getPageCode = (pageName, renderContent) => {
    return `export default class ${pageName} extends BasePage<BasePageProps, {}> {
        constructor(props: BasePageProps) {
            super(props)
        }

        render() {
            return (<ScrollView style={{ flex: 1 }}>${renderContent}</ScrollView>)
        }
    }`
}

/**
 * 根据模板获取 component 代码
 * @param {*} componentName
 * @param {*} renderContent
 * @returns
 */
export const getComponentCode = (componentName, renderContent) => {
    return `class ${componentName} extends BaseComponent<{}, {}> {
        constructor(props: {}) {
            super(props)
        }

        render() {
            return (${renderContent})
        }
    }`
}

/**
 * 根据模板获取单个文件的代码
 * @param {*} imports
 * @param {*} utils
 * @param {*} classes
 * @param {*} style
 * @returns
 */
export const getFileCode = (imports, utils, classes, style) => {
    let code = `
    import React from 'react';
    import { View, Text, Image, ImageBackground, ScrollView, StyleSheet } from 'react-native';
    import { BasePage, BasePageProps, BaseComponent } from "xrn-common";
    ${imports.join("\n")}
    ${utils.join("\n")}
    ${classes.join("\n")}
    
    const styles = StyleSheet.create(${toString(style)})`

    // 去掉 "rpx()" 两端的双引号
    code = code.replace(/"(rpx\(-?\d*(\.\d*)?\))"/g, (_, b) => {
        return b
    })

    return code
}
