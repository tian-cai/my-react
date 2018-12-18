const merge = require('webpack-merge');
const webpack = require("webpack");
const base = require("./webpack.config.base");

module.exports = merge(base,{
    mode:'development',
    output: {
        path: __dirname + "/build",
        filename: "[name]-[hash].js"
    },
    devServer: {
        contentBase: __dirname + "/build",
        compress: true
    },
    devtool: "inline-source-map",
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader", "postcss-loader"],
          }
        ]
    }
})