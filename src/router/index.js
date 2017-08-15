import Vue from 'vue'
import Router from 'vue-router'
//  文件名必须一致，精确匹配
const Home = r => require.ensure([], () => r(require('@/page/home/Home')), 'home')

const Prod = r => require.ensure([], () => r(require('@/page/products/Prod')), 'prod')
const ProdList = r => require.ensure([], () => r(require('@/page/products/ProdList')), 'prod')
const ProdDetail = r => require.ensure([], () => r(require('@/page/products/ProdDetail')), 'prod')

const Login = r => require.ensure([], () => r(require('@/page/login/Login')), 'login')

const Register = r => require.ensure([], () => r(require('@/page/register/Register')), 'register')

const Forget = r => require.ensure([], () => r(require('@/page/forget/Forget')), 'forget')

const Loan = r => require.ensure([], () => r(require('@/page/loan/Loan')), 'loan')

const Find = r => require.ensure([], () => r(require('@/page/find/Find')), 'find')

const User = r => require.ensure([], () => r(require('@/page/user/User')), 'user')

const NotFind = r => require.ensure([], () => r(require('@/page/notfind/NotFind')), 'not-find')

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            alias: '/home',
            component: Home,
            meta: {
                title: '商赢金服'
            }
        },
        {
            path: '/loan',
            name: 'loan',
            component: Loan,
            meta: {
                title: '借款'
            }
        },
        {
            path: '/find',
            name: 'find',
            component: Find,
            meta: {
                title: '发现'
            }
        },
        {
            path: '/user',
            name: 'user',
            component: User,
            meta: {
                title: '我的'
            }
        },
        {
            path: '/products',
            name: 'products',
            redirect: '/products/list',
            component: Prod,
            children: [
                {
                  path: '/products/list',
                  name: 'prod-list',
                  component: ProdList
                },
                {
                  path: '/products/detail/:id',
                  name: 'prod-detail',
                  component: ProdDetail
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/forget',
            name: 'forget',
            component: Forget
        },
        {
            path: '*',
            name: 'not-find',
            component: NotFind
        }
    ]
})
router.afterEach(route => {
    document.title = route.meta.title
})

export default router
