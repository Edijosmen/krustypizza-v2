import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Inicio.vue'
import Lista from '../views/listcar.vue'

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
    component: Home
  },
  {
    path: '/list',
    name: 'lista',
    component: Lista
  },
  {
    path: '/pizza',
    name: 'pizza',
    component: () => import(/* webpackChunkName: "Pizza" */ '../views/Pizza.vue')
  },
  {
    path: '/detallesfacturacion',
    name: 'facturacion',
    component: () => import(/* webpackChunkName: "Detalles_Facturacion" */ '../views/Detalles_Facturacion.vue')
  },
  {
    path: '/Pedidos',
    name: 'pedidos',
    component: () => import(/* webpackChunkName: "Pedidos" */ '../views/Pedidos.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "Inicio" */ '../views/Admin.vue')
  },
  {
    path: '/create-producto',
    name: 'newporducts',
    component: () => import(/* webpackChunkName: "Inicio" */ '../views/admin/Registroproducts.vue')
  },
  {
    path: '/create-proveedor',
    name: 'newproveedor',
    component: () => import(/* webpackChunkName: "Inicio" */ '../views/admin/CrearProveedor.vue')
  },
  {
    path: '/proveedor/:id/editar',
    name: 'editarproveedor',
    component: () => import(/* webpackChunkName: "Inicio" */ '../views/admin/EditarProveedor.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
