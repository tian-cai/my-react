let htmlWebpackPlugin = require("html-webpack-plugin");
let path = require('path')

let base = {
  entry: {
    main: __dirname + "/src/index.js",
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "src/index.html",
      title: "My React"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/i,
        use: ["file-loader?name=[name]-[hash].[ext]"],
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader?name=[name]-[hash].[ext]"],
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.(jsx|js)$/,
        use: ["babel-loader?cacheDirectory=true"],
        include: path.resolve(__dirname, "src")
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          // 打包第三方库
          test: /\/node_modules\//,
          name: "vendor",
          chunks: "all",
          minChunks: 1
        }
      }
    }
  }

};
module.exports = base;