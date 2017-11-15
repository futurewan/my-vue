import Vue from 'vue'
import Router from 'vue-router'
//  文件名必须一致，精确匹配
const home = r => require.ensure([], () => r(require('@/page/home/home')), 'home')
const homeRouter = r => require.ensure([], () => r(require('@/page/home/home-router')), 'home')
const flexbox = r => require.ensure([], () => r(require('@/page/home/flexbox')), 'flexbox')
const form = r => require.ensure([], () => r(require('@/page/form/form')), 'form')

const prodRouter = r => require.ensure([], () => r(require('@/page/products/prod')), 'prod')
const ProdList = r => require.ensure([], () => r(require('@/page/products/prodList')), 'prod')
const ProdDetail = r => require.ensure([], () => r(require('@/page/products/prodDetail')), 'prod')

const Login = r => require.ensure([], () => r(require('@/page/login/login')), 'login')

const Register = r => require.ensure([], () => r(require('@/page/register/register')), 'register')

const Forget = r => require.ensure([], () => r(require('@/page/forget/forget')), 'forget')

const more = r => require.ensure([], () => r(require('@/page/more/more')), 'more')

const NotFind = r => require.ensure([], () => r(require('@/page/notfind/notFind')), 'not-find')

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            component: home,
            alias: '/home',
            name: 'home',
            meta: {
                title: '首页'
            }
        },
        {
            path: '/home',
            component: homeRouter,
            meta: {
                title: '首页'
            },
            children: [
                {
                    path: 'flexbox',
                    name: 'flexbox',
                    component: flexbox,
                    meta: {
                        title: 'flexbox'
                    }
                }
            ]
        },
        {
            path: '/form',
            name: 'form',
            component: form,
            meta: {
                title: 'form样式'
            }
        },
        {
            path: '/more',
            name: 'more',
            component: more,
            meta: {
                title: '更多'
            }
        },
        {
            path: '/products',
            name: 'products',
            redirect: '/products/list',
            component: prodRouter,
            children: [
                {
                  path: 'list',
                  name: 'prod-list',
                  component: ProdList,
                    meta: {
                        title: '固收理财'
                    }
                },
                {
                  path: 'detail/:id',
                  name: 'prod-detail',
                  component: ProdDetail
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                title: '登录'
            }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                title: '注册新账户'
            }
        },
        {
            path: '/forget',
            name: 'forget',
            component: Forget,
            meta: {
                title: '找回密码'
            }
        },
        {
            path: '*',
            name: 'not-find',
            component: NotFind,
            meta: {
                title: 'not-find'
            }
        }
    ]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'vue'
  next()
})

export default router
