/*
 * @Author: lzy
 * @Date: 2020-07-15 13:13:07
 * @FilePath: \my-init-PC\vue-cli-template-master\src\pages\calculation\index.router.js
 */ 
export default { // 栏目2
  path: 'calculation',
  name: 'calculation',
  meta: { title: '数据计算', icon:'el-icon-loading', isShowLoading: false},
  component: () => import('@/pages/calculation'),
}