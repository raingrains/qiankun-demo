import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      globalMessage: {},
    }
  },
  mutations: {
    changeGlobalMessage(state, value) {
      state.globalMessage = value.globalMessage
    },
  },
  actions: {},
  modules: {},
})

export default store
