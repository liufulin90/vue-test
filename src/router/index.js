import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Hello from 'components/Hello'
import Map from 'components/map'
import Work from 'components/work'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    }
  ]
})
