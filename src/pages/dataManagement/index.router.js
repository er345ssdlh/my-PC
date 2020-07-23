/*
 * @Author: lzy
 * @Date: 2020-07-15 13:12:39
 * @FilePath: \my-init-PC\vue-cli-template-master\src\pages\dataManagement\index.router.js
 */ 
import empty from '@/pages/empty'
export default { // 栏目1
    path: 'dataManagement',
    name: 'dataManagement',
    redirect: 'dataManagement/administration',
    meta: { title: '数据管理', icon:'el-icon-s-order', isShowLoading: false},
    component: empty,
    children:[{
      path: 'administration',
      name: 'administration',
      meta: { title: '点位管理', icon:'el-icon-location', isShowLoading: false},
      component: () => import('@/pages/dataManagement/administration'),
    },{
      path: 'query',
      name: 'query',
      meta: { title: '点位查询', icon:'el-icon-s-promotion', isShowLoading: false},
      component: () => import('@/pages/dataManagement/query'),
    },{
      path: 'reportForm',
      name: 'reportForm',
      meta: { title: '数据报表', icon:'el-icon-s-promotion', isShowLoading: false},
      component: () => import('@/pages/dataManagement/reportForm'),
    }]
  }