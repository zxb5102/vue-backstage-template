import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

Vue.use(Router)

const routes = [
  {
    path: '*',
    name: 'Home 首页',
    component: Home
  },
]

export default new Router({
  // mode: 'history',
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})
