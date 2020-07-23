<!--
 * @Author: lzy
 * @Date: 2020-07-14 15:17:29
 * @FilePath: \my-init-PC\vue-cli-template-master\src\pages\layout\commponent\appHeader.vue
  * @explain:根据路由生成面包屑导航
  路由全局守卫添加状态存储，to.matched 解决刷新页面，面包屑数据消失
  监听路由变化，面包屑增加动效
  路由文件已经拆分成模块，路由与页面代码在同一文件夹下
  路由配置，如果没有实际页面内容引入empty.vue,并添加子路由
--> 
<template>
  <div>
    <div class="app_header">
      <div class="app_header_logo" @click="handleClickToHome">app-header-logo</div>
      <div class="app_header_content">
         <transition name="el-zoom-in-top">
          <el-breadcrumb v-show="show" separator-class="el-icon-arrow-right">
            <template v-for='item in userMatched'>
              <el-breadcrumb-item :key='item.name' :to="{ path: item.path || '/' }">{{item.meta.title}}</el-breadcrumb-item>
            </template>
          </el-breadcrumb>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  computed: {
    userMatched () {
      return this.$store.getters['userPageStoreDate'].userMatched
    }
  },
  watch: {
    $route() {
      this.show = !this.show
      setTimeout(() => {
        this.show = !this.show
      },50)
    }
  },
  created (){
  },
  methods:{
    handleClickToHome () {
      this.$router.push({
        path:'/'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app_header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: content;
  .app_header_logo{
    width: 200px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: #543325;
  }
  .app_header_content{
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
/deep/ .el-breadcrumb{
    height: 60px;
    line-height: 60px;
// 
}
/deep/ .el-icon-arrow-right{
    color:black
}
</style>