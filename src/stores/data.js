const state = {
  resevation: [
    {dataChegada: null},
    {dataSaida: null},
    {destino: ''}
  ]
}

const getters = {
  getDestiny: state => {
    console.log(state.resevation.destino)
    return state.resevation.destino
  }
}

const mutations = {
  CHANGE_DESTINY (state, destino) {
    state.resevation.destino = destino
  }
}

const actions = {
  changeDestiny ({commit}, destino) {
    commit('CHANGE_DESTINY', destino)
  }
}
export default {
  state, mutations, actions, getters
}
