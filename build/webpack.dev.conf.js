'use strict'

import fs from 'fs'
import path from 'path'
import { styleLoaders } from '../utils'
import webpack from 'webpack'
import config from '../config'
import merge from 'webpack-merge'
import baseWebpackConfig from './webpack.base.conf'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin'

Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['webpack-hot-middleware/client', baseWebpackConfig.entry[name]]
})
// console.log(fs.readFileSync(path.join(__dirname, './sw.dev.js'), 'utf-8'))

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  output: {
    publicPath: config.dev.assetsPublicPath 
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      serviceWorkerLoader: `<script>${fs.readFileSync(path.join(__dirname,
        './sw.dev.js'), 'utf-8')}</script>`

    }),
    new FriendlyErrorsPlugin()
  ]
})
