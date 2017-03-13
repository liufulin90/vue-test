import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

/**
 * 自定义组件（时间轴）
 */
import LinComponent from './lincomponents/'
Vue.use(LinComponent)

/* eslint-disable no-new */
Vue.config.silent = false // true取消 Vue 所有的日志与警告。
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
