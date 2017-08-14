import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Login from '@/components/login/login'
// import Register from '@/components/register/register'
// import Forget from '@/components/forget/forget'
// component: (resolve) => {
//       require(['../components/login/login'], resolve)
//     }
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const prod = r => require.ensure([], () => r(require('../page/products/prod')), 'prod')
const prodList = r => require.ensure([], () => r(require('../page/products/prod-list')), 'prodList')
const prodDetail = r => require.ensure([], () => r(require('../page/products/prod-detail')), 'prodDetail')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const register = r => require.ensure([], () => r(require('../page/register/register')), 'register')
const forget = r => require.ensure([], () => r(require('../page/forget/forget')), 'forget')
const loan = r => require.ensure([], () => r(require('../page/loan/index')), 'loan')
const find = r => require.ensure([], () => r(require('../page/find/index')), 'find')
const user = r => require.ensure([], () => r(require('../page/user/index')), 'user')

const notfind = r => require.ensure([], () => r(require('../page/notfind/notfind')), 'notfind')

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: home
  }, {
    path: '/prod',
    component: prod,
    children: [{
      path: '',
      name: 'prod-list',
      component: prodList
    }, {
      path: ':num',
      name: 'prod-detail',
      component: prodDetail
    }]
  }, {
    path: '/login',
    name: '',
    component: login
  }, {
    path: '/register',
    name: '',
    component: register
  }, {
    path: '/forget',
    name: '',
    component: forget
  }, {
    path: '/loan',
    name: '',
    component: loan
  }, {
    path: '/find',
    name: '',
    component: find
  }, {
    path: '/user',
    name: 'user',
    component: user
  }, {
    path: '*',
    name: '',
    component: notfind
  }]
})
