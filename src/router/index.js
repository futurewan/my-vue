import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Login from '@/components/login/login'
// import Register from '@/components/register/register'
// import Forget from '@/components/forget/forget'
// component: (resolve) => {
//       require(['../components/login/login'], resolve)
//     }
const Home = r => require.ensure([], () => r(require('@/page/home/home')), 'Home')
const Prod = r => require.ensure([], () => r(require('@/page/products/prod')), 'Prod')
const ProdList = r => require.ensure([], () => r(require('@/page/products/prod-list')), 'ProdList')
const ProdDetail = r => require.ensure([], () => r(require('@/page/products/prod-detail')), 'ProdDetail')
const Login = r => require.ensure([], () => r(require('@/page/login/login')), 'Login')
const Register = r => require.ensure([], () => r(require('@/page/register/register')), 'Register')
const Forget = r => require.ensure([], () => r(require('@/page/forget/forget')), 'Forget')
const Loan = r => require.ensure([], () => r(require('@/page/loan/index')), 'Loan')
const Find = r => require.ensure([], () => r(require('@/page/find/index')), 'Find')
const User = r => require.ensure([], () => r(require('@/page/user/index')), 'User')

const Notfind = r => require.ensure([], () => r(require('@/page/notfind/notfind')), 'Notfind')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/prod',
            component: Prod,
            children: [
                {
                  path: '',
                  name: 'prod-list',
                  component: ProdList
                },
                {
                  path: ':num',
                  name: 'prod-detail',
                  component: ProdDetail
                }
            ]},
        {
            path: '/login',
            name: '',
            component: Login
        },
        {
            path: '/register',
            name: '',
            component: Register
        },
        {
            path: '/forget',
            name: '',
            component: Forget
        },
        {
            path: '/loan',
            name: '',
            component: Loan
        },
        {
            path: '/find',
            name: '',
            component: Find
        },
        {
            path: '/user',
            name: 'user',
            component: User
        },
        {
            path: '*',
            name: '',
            component: Notfind
        }
    ]
})
