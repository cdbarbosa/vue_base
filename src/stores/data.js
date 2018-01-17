const state = {
  hotelData: []
}

const getters = {
  hotelData: () => state.hotelData
}

const mutations = {
  SET_HOTEL_DATA (state, data) {
    state.hotelData = data
  },
  CHANGE_DESTINY (state, destino) {
    state.resevation.destino = destino
  }
}

const actions = {
  setHotelData ({ commit }, data) {
    commit('SET_HOTEL_DATA', data)
  },
  changeDestiny ({commit}, destino) {
    commit('CHANGE_DESTINY', destino)
  }
}
export default {
  state, mutations, actions, getters
}
