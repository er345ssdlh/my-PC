/*
 * @Author: lzy
 * @Date: 2020-07-15 13:16:54
 * @FilePath: \my-init-PC\vue-cli-template-master\src\pages\deviceManagement\index.router.js
 */ 
import empty from '@/pages/empty'
export default { // 栏目1
  path: 'deviceManagement',
  name: 'deviceManagement',
  redirect: 'deviceManagement/maintain',
  meta: { title: '设备管理', icon:'el-icon-setting', isShowLoading: false},
  component: empty,
  children:[{
    path: 'maintain',
    name: 'maintain',
    redirect: 'maintain/category',
    meta: { title: '设备维护', icon:'el-icon-success', isShowLoading: false},
    component: empty,
    children:[{
      path: 'category',
      name: 'category',
      meta: { title: '设备类别维护', icon:'el-icon-circle-plus-outline', isShowLoading: false},
      component: () => import('@/pages/deviceManagement/category'),
    },{
      path: 'information',
      name: 'information',
      meta: { title: '设备信息维护', icon:'el-icon-video-camera-solid', isShowLoading: false},
      component: () => import('@/pages/deviceManagement/information'),
    },]
  },{
    path: 'monitor',
    name: 'monitor',
    meta: { title: '设备监控', icon:'el-icon-success', isShowLoading: false},
    component: () => import('@/pages/deviceManagement/monitor'),
  }]
}