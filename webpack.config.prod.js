const merge = require('webpack-merge');
const cleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const base = require("./webpack.config.base");

module.exports = merge(base, {
    mode: "production",
    output: {
        path: __dirname + "/build",
        filename: "[name]-[contenthash].js"
    },
    plugins: [
        new cleanWebpackPlugin("build/*"),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true
            }),
            new OptimizeCssAssetsPlugin({})
        ],
        splitChunks: {
            cacheGroups: {
                style: {
                    name: 'style',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
})