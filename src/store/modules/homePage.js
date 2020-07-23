/*
 * @Author: lzy
 * @Date: 2020-07-10 14:32:17
 * @FilePath: \my-init-PC\vue-cli-template-master\src\store\modules\homePage.js
 */ 
const homePage = {
  namespaced: true,
  state: {
    newList: ['1','2','3'],
  }, 
  getters: {
    getNewList: state => state.newList
  },
  mutations: {
    setNewList: (state,config) => {
      state.newList = config.SetNewList
    },
  }, 
  actions:{
    promiseSetNewList: ({ commit },config) => {
      commit('setNewList', config)
    }
  }
}

export default homePage