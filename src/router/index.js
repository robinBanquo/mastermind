import Vue from 'vue'
import Router from 'vue-router'
import Mastermind from '@/components/Mastermind'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mastermind',
      component: Mastermind
    }
  ]
})
