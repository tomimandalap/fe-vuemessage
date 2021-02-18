import Vue from 'vue'
import Vuex from 'vuex'
import moduleUsers from './modules/user'

Vue.use(Vuex)
const store = new Vuex.Store({
  state () {
    return {
      staticURL: process.env.VUE_APP_URL
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users: moduleUsers
  }
})
export default store
