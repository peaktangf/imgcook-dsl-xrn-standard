module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parser: "babel-eslint",
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    parserOptions: {
        sourceType: "module"
    },
    rules: {}
}
