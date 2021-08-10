const path = require("path");
const webpack = require("webpack");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");

const prodConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");

const resolveApp = (relativePath) => path.resolve(__dirname, relativePath);

module.exports = function () {
    const isEnvProduction = process.env.NODE_ENV === "production";
    const commonConfig = {
        devtool: "source-map",

        entry: "./src/index.ts",

        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, "dist"),
            libraryTarget: "umd",
        },

        resolve: {
            extensions: [".ts"],
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: "ts-loader",
                        },
                    ],
                    include: [resolveApp("src")],
                    exclude: /(node_modules|dist)/,
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                WIDGET_VERSION: JSON.stringify(
                    require(resolveApp("package.json")).version
                ),
            }),
            new CircularDependencyPlugin({
                exclude: /node_modules/,
                failOnError: true,
            }),
            new CleanWebpackPlugin(),
        ],
        stats: {
            modules: false,
        },
    };

    if (isEnvProduction) return merge(commonConfig, prodConfig);
    else return merge(commonConfig, devConfig);
};
