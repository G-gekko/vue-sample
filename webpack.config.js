module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "build.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};
