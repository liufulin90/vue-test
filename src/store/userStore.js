import Vue from 'vue'
import UserService from '../services/UserService'

export const USER_SIGNIN = 'USER_SIGNIN' // 登录
export const USER_SIGNOUT = 'USER_SIGNOUT' // 退出

export default {
  state: JSON.parse(sessionStorage.getItem('user')) || {},
  mutations: {
    [USER_SIGNIN] (state, payload) {
      sessionStorage.setItem('user', JSON.stringify(payload))
      Object.assign(state, payload)
    },
    [USER_SIGNOUT] (state) {
      sessionStorage.removeItem('user')
      Object.keys(state).forEach(k => Vue.delete(state, k))
      setTimeout(function () {

      }, 2000)
    }
  },
  actions: {
    [USER_SIGNIN] ({commit}, payload) {
      commit(USER_SIGNIN, payload)
    },
    [USER_SIGNOUT] ({commit}) {
      console.log('正在退出')
      return UserService.logout().then(() => {
        commit(USER_SIGNOUT)
      })
    }
  }
}
