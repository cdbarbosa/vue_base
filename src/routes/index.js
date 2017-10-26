import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '@/pages/Home'
import Dashboard from '@/pages/Dashboard'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
