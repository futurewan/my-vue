// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Promise from 'es6-promise'
import router from './router'
import commonfilters from './filter/index'
import commonComs from './components/common/index'
import FastClick from 'fastclick' // 使用 fastclick 解决移动端 300ms 点击延迟

import Vuex from 'vuex'
import api from './plugin/api.plugin'
Promise.polyfill()
Vue.use(api)
Vue.use(Vuex)

let store = new Vuex.Store({})

Vue.use(store)
// Vue.config.productionTip = true

// 导航开始时
// router.beforeEach((to, from, next) => {
// })
// 导航结束时

// import { AlertPlugin, ToastPlugin } from 'vux'

// Vue.use(AlertPlugin)
// Vue.use(ToastPlugin)
/* eslint-disable no-new */

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}
Object.keys(commonfilters).forEach(function (key, index, arr) {
  Vue.filter(key, commonfilters[key])
})

Object.keys(commonComs).forEach(function (key, index, arr) {
  Vue.component(key, commonComs[key])
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
