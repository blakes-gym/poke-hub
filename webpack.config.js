const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/client/build'
  },
  plugins: [new HtmlWebpackPlugin()]
}
