// 我们组装模块并导出 store 的地方
import Vuex from 'vuex'
import Vue from 'vue'
import {myPlugin} from './plugins'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    menu: {
      defaultActive: 1
    },
    workPage: {
      workList: [],
      projectList: []
    },
    mapPage: {
      isOk: true,
      inputData: ''
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  },
  modules: {
    // key: {}
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
