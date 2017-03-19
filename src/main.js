import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/'
import store from './store'
import components from './components/' // 加载公共组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
/**
 * 自定义组件（时间轴）
 */
import LinComponent from './lincomponents/'
Vue.use(LinComponent)
/* eslint-disable no-new */
Vue.config.silent = false // true取消 Vue 所有的日志与警告。

// 将组件挂载到vue
Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
  Vue.component(`v${name}`, components[key])
})

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
router.beforeEach(({meta, path}, from, next) => {
  var { auth = true } = meta
  var isLogin = store.state.user && Boolean(store.state.user.id) // true用户已登录， false用户未登录

  console.log('check', auth && !isLogin && path !== '/login')
  if (auth && !isLogin && path !== '/login') {
    return next({ path: '/login' })
  }
  console.log('path', path)
  if (path === '/') {
    return next({path: '/index'})
  }
  next()
})

import App from './App'
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})

// new Vue({ store, router }).$mount('#app')
