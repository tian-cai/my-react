const merge = require('webpack-merge');
const webpack = require("webpack");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const base = require("./webpack.config.base");

module.exports = merge(base,{
    mode:"production",
    output: {
        path: __dirname + "/build",
        filename: "[name]-[chunkhash].js"
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: 'css-loader'
            })
          },
        ]
    },
    plugins: [
        new cleanWebpackPlugin("build/*"),
        new webpack.HashedModuleIdsPlugin(),
        new ExtractTextPlugin({
            filename: "[name]-[hash].css",
            allChunks: false
        })
    ]
})