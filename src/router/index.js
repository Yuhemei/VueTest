import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/all',
    name: 'all',
    component: ()=>import('@/views/all.vue')
  },
  {
    path: '/classTest',
    name: 'classTest',
    component: ()=>import('@/views/all.vue')
  },
  {
    path: '/watchTest',
    name: 'watchTest',
    component: ()=>import('@/views/all.vue')
  },
  {
    path: '/canvas',
    name: 'canvas',
    component: ()=>import('@/views/canvas.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
