import merge from 'webpack-merge'

const prod = {
  NODE_ENV: '"production"'
}
const dev = merge(prod, {
  NODE_ENV: '"development"'
})

export {
  dev, prod
}
