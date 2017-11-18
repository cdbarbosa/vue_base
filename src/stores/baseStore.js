const state = {
  products: [
    {name: 'Banana Skin', price: 20},
    {name: 'Shiny Star', price: 40},
    {name: 'Green Shells', price: 60},
    {name: 'Red Shells', price: 80}
  ]
}

const getters = {
  saleProducts: (state) => {
    let saleProducts = state.products.map(product => {
      return {
        name: '**' + product.name + '**',
        price: product.price / 2
      }
    })
    return saleProducts
  }
}

const mutations = {
  REDUCE_PRICE (state, payload) {
    state.products.forEach(product => {
      product.price -= payload
    })
  }
}

const actions = {
  reducePrice: ({ commit }, payload) => {
    commit('REDUCE_PRICE', payload)
  }
}

export default {
  state, getters, mutations, actions
}
