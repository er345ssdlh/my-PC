/*
 * @Author: lzy
 * @Date: 2020-07-15 13:13:39
 * @FilePath: \my-init-PC\vue-cli-template-master\src\pages\digitalTwins\index.router.js
 */ 
import empty from '@/pages/empty'
export default { // 栏目3
        path: 'digitalTwins',
        name: 'digitalTwins',
        redirect: 'digitalTwins/objectTemplate',
        meta: { title: '数字孪生', icon:'el-icon-s-flag', isShowLoading: false},
        component: empty,
        children:[{
          path: 'objectTemplate',
          name: 'objectTemplate',
          meta: { title: '物模板', icon:'el-icon-football', isShowLoading: false},
          component: () => import('@/pages/digitalTwins/objectTemplate'),
        },{
          path: 'objectInstance',
          name: 'objectInstance',
          meta: { title: '物实例', icon:'el-icon-basketball', isShowLoading: false},
          component: () => import('@/pages/digitalTwins/objectInstance'),
        },{
          path: 'objectVisual',
          name: 'objectVisual',
          meta: { title: '物可视', icon:'el-icon-baseball', isShowLoading: false},
          component: () => import('@/pages/digitalTwins/objectVisual'),
        }]
      }