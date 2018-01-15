const state = {
  text: 'banana',
  products: [
    {name: 'Banana Skin', price: 20},
    {name: 'Shiny Star', price: 40},
    {name: 'Green Shells', price: 60},
    {name: 'Red Shells', price: 80}
  ]
}

const getters = {
  text (state) {
    return state.text
  },
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
  CHANGE_TEXT (state, text) {
    state.text = text
  },
  REDUCE_PRICE (state, payload) {
    state.products.forEach(product => {
      product.price -= payload
    })
  }
}

const actions = {
  changeText: ({ commit }, text) => {
    commit('CHANGE_TEXT', text)
  },
  reducePrice: ({ commit }, payload) => {
    commit('REDUCE_PRICE', payload)
  }
}

export default {
  state, getters, mutations, actions
}
