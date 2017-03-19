
export const CHANGE_PENDING = 'CHANGE_PENDING' // 全局改变pending的状态

export default {
  state: {pending: false},
  mutations: {
    [CHANGE_PENDING] (state, value) {
      Object.assign(state, {pending: value})

      console.log(state, value)
    }
  },
  actions: {
    [CHANGE_PENDING] ({commit}, value) {
      commit(CHANGE_PENDING, value)
    }
  }
}
