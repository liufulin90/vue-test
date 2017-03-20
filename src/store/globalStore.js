import menus from './menus'
import * as jst from 'js-common-tools'
export const CHANGE_PENDING = 'CHANGE_PENDING' // 全局改变pending的状态
export const CHANGE_MENUS = 'CHANGE_MENUS' // 每当权限改变时改变显示菜单

export default {
  state: {pending: false, menus},
  mutations: {
    [CHANGE_PENDING] (state, value) {
      Object.assign(state, {pending: value})
    },
    [CHANGE_MENUS] (state, {rtState}) {
      const {user, _global} = rtState
      user.power.push('004')
      const ownMenus = _global.menus.filter((item) => {
        return jst.inArray(item.key, user.power)
      })
      Object.assign(rtState, {ownMenus: ownMenus})
      console.log('rtState', rtState)
    }
  },
  actions: {
    [CHANGE_PENDING] ({commit}, value) {
      commit(CHANGE_PENDING, value)
    },
    [CHANGE_MENUS] ({commit, rootState}, value) {
      // this.$store.state.user.power.push('004')
      commit(CHANGE_MENUS, {rtState: rootState, value: value})
    }
  }
}
