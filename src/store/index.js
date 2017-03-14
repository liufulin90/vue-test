// 我们组装模块并导出 store 的地方
import Vuex from 'vuex'
import Vue from 'vue'
import _actions from './actions'
import _mutations from './mutations'
import _workModule from './modules/workStore'
import {myPlugin} from './plugins'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    keyboardEnterValue: '',
    count: 1,
    menu: {
      defaultActive: 1
    },
    mapPage: {
      isOk: true,
      inputData: '',
      formData: {
        commentCount: 10
      }
    }
  },
  mutations: {
    ..._mutations
  },
  actions: {
    ..._actions
  },
  modules: {
    // key: {}
    workPage: _workModule
  },
  getters: {
    // state,     // 如果在模块中定义则为模块的局部状态
    // getters,   // 等同于 store.getters
    // rootState  // 等同于 store.state
  },
  // Vuex 的 store 接受 plugins 选项，这个选项暴露出每次 mutation 的钩子。Vuex 插件就是一个函数，它接收 store 作为唯一参数：
  plugins: [myPlugin],
  strict: false // 默认值: false使 Vuex store 进入严格模式，在严格模式下，任何 mutation 处理函数以外修改 Vuex state 都会抛出错误。
})

export default store
