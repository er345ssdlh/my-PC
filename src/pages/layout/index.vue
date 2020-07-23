<!--
 * @Author: lzy
 * @Date: 2020-07-14 15:16:09
 * @FilePath: \my-init-PC\vue-cli-template-master\src\pages\layout\index.vue
--> 
<template>
  <div>
    <el-container>
      <el-header>
        <app-header/>
      </el-header>
      <el-container>
        <el-aside>
          <app-side/>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import appHeader from './commponent/appHeader'
import appSide from './commponent/appSide'
export default {
  components: {
    appHeader,
    appSide
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style  lang="scss" scoped>
/deep/ .el-aside {
  overflow: hidden;
  // background-color: #545C64;
}
/deep/ .el-header {
  // height: 100px !important;
}
/deep/ .el-main {
  line-height: 30px !important;
}
</style>