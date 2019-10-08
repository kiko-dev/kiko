import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
export default router
