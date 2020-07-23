/*
 * @Author: lzy
 * @Date: 2020-07-15 13:11:44
 * @FilePath: \my-init-PC\vue-cli-template-master\src\pages\index.router.js
 */ 
export default { // 默认首页
    path: '',
    name: 'home',
    meta: { title: '从这里开始', icon:'el-icon-location', isShowLoading: false},
    component: () => import('@/pages'),
  }