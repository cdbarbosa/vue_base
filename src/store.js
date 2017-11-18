import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
import baseStore from './stores/baseStore'

export default new Vuex.Store({
  modules: {
    baseStore
  },
  strict: debug
})
