/*
 * @Author: lzy
 * @Date: 2020-07-10 14:32:25
 * @FilePath: \my-init-PC\vue-cli-template-master\src\store\modules\userPage.js
 */
// 侧边栏和面包屑联动，与刷新保持不变
const userPage = {
  namespaced: true,
  state: {
    userPath: '',
    userMatched: {}
  }, 
  getters: {},
  mutations: {
    userPath(state,opt) {
      state.userPath = opt
    },
    userMatched(state,opt) {
      state.userMatched = opt
    },
  }, 
  actions:{
  }
}

export default userPage