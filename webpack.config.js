/* eslint-disable @typescript-eslint/no-var-requires */
const nodeExternals = require("webpack-node-externals");
const Dotenv = require("dotenv-webpack");

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "./index.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    target: "node",
    externals: [nodeExternals()],
    module: {
        rules: [
            { test: /\.(t|j)sx?$/, use: ["ts-loader", "eslint-loader"] },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        ],
    },
    devtool: "source-map",
    plugins: [new Dotenv()],
};
