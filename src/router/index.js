import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "Inicio" */ '../views/Inicio.vue')
  },
  {
    path: '/list',
    name: 'lista',
    component: () => import(/* webpackChunkName: "Inicio" */ '../views/listcar.vue')
  },
  {
    path: '/pizza',
    name: 'pizza',
    component: () => import(/* webpackChunkName: "Inicio" */ '../views/Pizza.vue')
  },
  {
    path: '/Detalles-facturacion',
    name: 'facturacion',
    component: () => import(/* webpackChunkName: "Inicio" */ '../views/Detalles_Facturacion.vue')
  },
  {
    path: '/Pedidos',
    name: 'pedidos',
    component: () => import(/* webpackChunkName: "Inicio" */ '../views/Pedidos.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
