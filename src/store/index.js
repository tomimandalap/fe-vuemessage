import Vue from 'vue'
import Vuex from 'vuex'
import moduleUsers from './modules/user'

Vue.use(Vuex)
const store = new Vuex.Store({
  state () {
    return {
      staticURL: 'http://localhost:4000'
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
