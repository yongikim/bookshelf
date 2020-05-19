const path = require('path')
const assetsPlugin = require('assets-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './front_end/index.tsx',
  output: {
    path: path.join(__dirname, '..', '..', 'public'),
    filename: 'bundle_web-[hash].js'
  },
  module: {
    rules: [
      { test: [/\.tsx?$/, /\.jsx?$/], use: 'babel-loader' }
    ]
  },
  plugins: [
    new assetsPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, '..', '..', 'public'),
    compress: true,
    port: 9000
  }
};
