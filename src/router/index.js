import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Main from '../views/Main'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/main',
    name: 'Main',
    component: Main
  }, {
    path: '/vipList',
    component: Main,
    children: [
      {
        path: '/',
        component: () => import('@/views/VipList'),
        meta: { title: "会员管理" },
      }
    ]
  }, {
    path: '/goodsList',
    component: Main,
    children: [
      {
        path: '/',
        component: () => import('@/views/GoodsList'),
        meta: { title: "员工管理" },
      }
    ]
  }, {
    path: '/employeesList',
    component: Main,
    children: [
      {
        path: '/',
        component: () => import('@/views/EmployeesList'),
        meta: { title: "商品管理" },
      }
    ]
  }, {
    path: '/supplierList',
    component: Main,
    children: [
      {
        path: '/',
        component: () => import('@/views/SupplierList'),
        meta: { title: "供应商管理" },
      }
    ]
  }, {
    path: '*',
    component: Main
  }
]

const router = new VueRouter({
  routes
})

export default router
