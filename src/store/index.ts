import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

type User = {
  id: number
  name: string
}

export default new Vuex.Store({
  state: {
    userInfo: null
  },
  mutations: {
    SET_USER_INFO(state, info) {
      state.userInfo = info
    }
  },
  actions: {
    GetInfo({ commit }, userId: number) {
      return new Promise<User>((resolve) => {
        const user = { id: userId, name: 'admin' }
        commit('SET_USER_INFO', user)
        resolve(user)
      })
    },
    logout() {
      return new Promise<void>((resolve) => {
        // 退出登录
        resolve()
      })
    }
  },
  modules: {}
})
