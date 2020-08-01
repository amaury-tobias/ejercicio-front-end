import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/Upload.vue'),
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/Gallery.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
