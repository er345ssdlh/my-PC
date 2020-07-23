<!--
 * @Author: lzy
 * @Date: 2020-07-14 15:17:36
 * @FilePath: \my-init-PC\vue-cli-template-master\src\pages\layout\commponent\appSide.vue
 * @explain:根据路由生成侧边栏，只要配置好路由，侧边栏自动生成
  路由全局守卫里添加状态存储，to.fullPath 解决刷新页面侧边栏选项丢失
  this.$router.options.routes[0].children 获取layout-main下边的路由，子代最多两层
  路由文件已经拆分成模块，路由与页面代码在同一文件夹下
  路由配置，如果没有实际页面内容引入empty.vue,并添加子路由
-->
<template>
  <div>
    <el-menu
      :default-active="userPath"
      router
      class="el-menu-vertical-demo"
      background-color="#545C64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <template v-for="route in routerList">
        <template v-if='route.children && route.children.length'>
          <el-submenu :index="'/' + route.path" :key="route.path">
            <template slot="title">
              <i :class="route.meta.icon"></i>{{route.meta.title}}
            </template>
            <template  v-for="item in route.children">

              <template v-if="item.children && item.children.length">
                <el-submenu :index="'/' + route.path + '/' + item.path" :key="item.path">

                  <template slot="title">
                    <i :class="item.meta.icon"></i>{{item.meta.title}}
                  </template>

                  <el-menu-item  v-for="(its, ind) in item.children" :key='ind' :index="'/' + route.path + '/' + item.path + '/' + its.path">
                    <i :class="its.meta.icon"></i>{{its.meta.title}}
                  </el-menu-item>

                </el-submenu>
              </template>

              <template v-else>
                <el-menu-item :index="'/' + route.path + '/' + item.path" :key="item.path">
                  <i :class="item.meta.icon"></i>{{item.meta.title}}
                </el-menu-item>
              </template>
            </template>
          </el-submenu>
        </template>
        <template v-else>
            <el-menu-item  :index="'/' + route.path" :key="route.path">
              <i :class="route.meta.icon"></i>{{route.meta.title}}
            </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routerList: []
    }
  },
  computed: {
    userPath () {
      return this.$store.getters['userPageStoreDate'].userPath
    }
  },
 created () {
   this.routerList = this.$router.options.routes[0].children.filter(item => {
     return item.path !== ''
   })
 }
}
</script>

<style scoped>
.el-menu{
  width: 100%;
}
</style>