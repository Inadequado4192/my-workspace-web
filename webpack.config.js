module.exports = {
    entry: "./assets/js/index.js",
    output: {
        path: `${__dirname}/assets/js`,
        filename: "build.js"
    },
    mode: "development" // 'development' or 'production'
}