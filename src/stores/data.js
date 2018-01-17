const state = {
  hotelData: [],
  booking: {
    city: '',
    hotel: '',
    in: '',
    out: ''
  }
}

const getters = {
  hotelData: () => state.hotelData,
  booking: () => state.booking
}

const mutations = {
  SET_HOTEL_DATA (state, data) {
    state.hotelData = data
  },
  SET_BOOKING_DATA (state, payload) {
    state.booking[payload[0]] = payload[1]
  },
  CHANGE_DESTINY (state, destino) {
    state.resevation.destino = destino
  }
}

const actions = {
  setHotelData ({ commit }, data) {
    commit('SET_HOTEL_DATA', data)
  },
  setBookingData ({ commit }, payload) {
    commit('SET_BOOKING_DATA', payload)
  },
  changeDestiny ({commit}, destino) {
    commit('CHANGE_DESTINY', destino)
  }
}
export default {
  state, mutations, actions, getters
}
