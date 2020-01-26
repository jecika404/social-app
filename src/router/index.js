import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/home/Dashboard'
import Welcome from '@/components/layout/Welcome'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router