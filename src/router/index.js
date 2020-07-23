/*
 * @Author: lzy
 * @Date: 2020-07-07 15:53:17
 * @FilePath: \my-init-PC\vue-cli-template-master\src\router\router.js
 */ 
import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'
import { getCookie } from '../utils/util'
import layout from '@/pages/layout'
import NProgress from 'nprogress' // 进度条
Vue.use(Router)
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 遍历所有路由
const requireAll = requireContext => requireContext.keys().map(requireContext)
const routerFile = require.context('@/pages', true, /\.router\.js/)
let routerArr = []
requireAll(routerFile).map(item => {
  Array.isArray(item.default) ? item.default.map(item => routerArr.push(item)) : routerArr.push(item.default)
})

const router = new Router({
  // mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      meta: { title: '首页',isShowLoading: false},
      component: layout,
      children: [
        ...routerArr
      ]
    },{
      path: '/login',
      name: 'login',
      meta: { title: '登录',isShowLoading: false},
      component: () => import('@/pages/login.vue'),
    }
  ]
})

// 路由前置守卫beforEach
router.beforeEach((to, from, next) => {
  NProgress.start()
  const {title,isShowLoading} = to.meta
  store.commit('userPage/userPath',to.fullPath) // 刷新页面侧边栏保持原来位置
  store.commit('userPage/userMatched',to.matched) // 面包屑

  isShowLoading && window.common.showLoading({
    text: '页面加载中...',
    background: 'rgba(0,0,0,0.3)',
    width:'200px',
    height:'200px'
  })

  title ? document.title = 'LeapIOT Platform - ' + title : 'LeapIOT Platform'

  // 1:如果不是login页并且没有登录
  to.path !== "/login" && !getCookie('token') ? next("/login") : next()
  
  // 2:添加白名单
  // if(to.path == "/") {
  //   next()
  // }else{
  //   (to.path !== "/login" && !getCookie('user')) ? next("/login") : next()
  // }
})
router.afterEach(() => {
  NProgress.done()
})
export default router
