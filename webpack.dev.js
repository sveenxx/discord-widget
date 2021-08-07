const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const resolveApp = (relativePath) => path.resolve(__dirname, relativePath);

module.exports = {
    mode: "production",
    entry: [resolveApp("src/index.ts")],
    output: {
        path: resolveApp("dist/"),
        filename: "discord-widget.js",
        library: "DiscordWidget",
        libraryTarget: "umd",
        libraryExport: "default",
        globalObject: "this",
    },
    plugins: [
        new UglifyJSPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ],
};
