import Vue from 'vue'
import Router from 'vue-router'
import VueTheMask from 'vue-the-mask'

Vue.use(VueTheMask)
Vue.use(Router)

import Home from '@/pages/Home'
import Dashboard from '@/pages/Dashboard'
import Reserva from '@/pages/Reserva'
import Quarto from '@/components/Room'
import ReservaQuarto from '@/components/ReservaQuarto'
import Pagamento from '@/components/PaymentForm'
import Final from '@/pages/Final.vue'

export default new Router({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? '/pwa' : '/',
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
    },
    {
      path: 'reserva',
      name: 'reserva',
      component: Reserva
    },
    {
      path: 'quarto',
      name: 'quarto',
      component: Quarto
    },
    {
      path: 'cadastro',
      name: 'cadastro',
      component: ReservaQuarto
    },
    {
      path: 'pagamento',
      name: 'pagamento',
      component: Pagamento
    },
    {
      path: 'final',
      name: 'final',
      component: Final
    }
  ]
})
