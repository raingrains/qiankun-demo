import { createStore } from 'vuex'
// import Vue from 'vue'
//
// console.log(Vue)

const store = createStore({
  state() {
    return {
      globalMessage: {},
    }
  },
  mutations: {
    changeLocalGlobalMessage(state, value) {
      state.globalMessage = value
    },
    updateGlobalMessage(state, value) {},
  },
  actions: {},
  modules: {},
})

export default store
