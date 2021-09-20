import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '@/pages/Dashboard.vue'
import PengurursanStock from '@/pages/PengurursanStock.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/dashboard",
    name: 'Home',
  },
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        components: { default: Dashboard }
      },
      {
        path: "pengurusanstock",
        name: "Pengurusanstock",
        components: { default: PengurursanStock }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
