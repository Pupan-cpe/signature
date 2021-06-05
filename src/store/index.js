import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imageBytes: ''
  },
  mutations: {
    img (state, val) {
      state.img = val
    }
  },
  actions: {
  },
  modules: {
  }
})
