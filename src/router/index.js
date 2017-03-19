import Work from 'pages/work'
import App from '../App'

/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/login', // 登录
        meta: { auth: false },
        component: resolve => require(['../pages/login/index'], resolve)
      },
      {
        path: '/',
        name: 'main',
        component: resolve => require(['../pages/main'], resolve),
        children: [
          {
            path: '/index',
            name: 'index',
            component: resolve => require(['../pages/home'], resolve)
          },
          {
            path: '/map',
            name: 'Map',
            component: resolve => require(['../pages/map/Map'], resolve)
          },
          {
            path: '/work',
            name: 'Work',
            component: Work
          },
          {
            path: '*', // 其他页面，强制跳转到登录页面
            redirect: '/login'
          }
        ]
      }
    ]
  }
]
