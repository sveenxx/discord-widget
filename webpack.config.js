const path = require("path");
const webpack = require("webpack");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const { merge } = require("webpack-merge");

const prodConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");

const resolveApp = (relativePath) => path.resolve(__dirname, relativePath);

module.exports = function () {
    const isEnvProduction = process.env.NODE_ENV === "production";
    const commonConfig = {
        entry: "./src/index.ts",
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, "dist"),
        },
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: "ts-loader",
                            options: {
                                compilerOptions: {
                                    declaration: false,
                                },
                            },
                        },
                    ],
                    include: [resolveApp("src")],
                    exclude: [/node_modules/],
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
        ],
        stats: {
            modules: false,
        },
        resolve: {
            extensions: [".ts", ".js"],
        },
    };

    if (isEnvProduction) return merge(commonConfig, prodConfig);
    else return merge(commonConfig, devConfig);
};
