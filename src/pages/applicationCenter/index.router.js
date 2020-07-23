/*
 * @Author: lzy
 * @Date: 2020-07-15 16:00:03
 * @FilePath: \my-init-PC\vue-cli-template-master\src\pages\applicationCenter\index.router.js
 */ 
export default {
  path: 'applicationCenter',
  name: 'applicationCenter',
  meta: { title: '应用中心', icon:'el-icon-platform-eleme', isShowLoading: false},
  component: () => import('@/pages/applicationCenter'),
}