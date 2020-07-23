/*
 * @Author: lzy
 * @Date: 2020-07-07 15:53:17
 * @FilePath: \my-init-PC\vue-cli-template-master\src\store\index.js
 */ 
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import widget from './modules/widget'
import homePage from './modules/homePage'
import userPage from './modules/userPage'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    widget,
    homePage,
    userPage
  },
  getters
})
