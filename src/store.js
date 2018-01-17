import Vue from 'vue'
import Vuex from 'vuex'
import Buefy from 'buefy'

Vue.use(Vuex)
Vue.use(Buefy)

const debug = process.env.NODE_ENV !== 'production'
import data from './stores/data'

export default new Vuex.Store({
  modules: {
    data
  },
  strict: debug
})
