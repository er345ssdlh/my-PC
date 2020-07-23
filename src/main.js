/*
 * @Author: lzy
 * @Date: 2020-07-07 15:53:17
 * @FilePath: \my-init-PC\vue-cli-template-master\src\main.js
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as utils from '@/utils'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import './components/SvgIcon'
import './assets/scss/index.scss'

// 使用echarts 的两种方式
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
Vue.component('chart', ECharts)

//引入nprogress
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' //这个样式必须引入
NProgress.inc(0.2)
NProgress.configure({
  easing: 'ease',  // 动画方式    
  speed: 500,  // 递增进度条的速度    
  showSpinner: true, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})

Vue.config.productionTip = false

// 全局方法
window.common = {
  showLoading: utils.showLoading,
  hideLoading: utils.hideLoading,
  showToast: utils.showToast,
  hideToast: utils.hideToast
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
