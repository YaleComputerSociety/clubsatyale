
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//   // template: __dirname + '/web/index.html',
//   // filename: 'index.html',
//   inject: 'body'
// })

module.exports = {
    entry: [
      './js/index.js'
    ],
    output: {
      path: __dirname + './build',
      filename: "index.bundle.js"
    },
    module: {
      loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: { presets: ['es2015', 'react'] }
          },
          {test: /\.css$/, loader: "style-loader!css-loader"}
      ]
    },
    // plugins: [HtmlWebpackPluginConfig]
}