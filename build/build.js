import checkVersions from '../utils/check-versions'

checkVersions()

process.env.NODE_ENV = 'production'

import ora from 'ora'
import rm from 'rimraf'
import path from 'path'
import chalk from 'chalk'
import webpack from 'webpack'
import config from '../config'
import webpackConfig from './webpack.prod.conf'

let spinner = ora('Building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
