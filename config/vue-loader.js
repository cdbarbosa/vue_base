import { cssLoaders } from '../utils'
import config from './index'
const isProduction = process.env.NODE_ENV === 'production'

export default {
  loaders: cssLoaders({
    sourceMap: isProduction ? config.build.productionSourceMap : config.dev.cssSourceMap,
    extract: isProduction
  })
}
