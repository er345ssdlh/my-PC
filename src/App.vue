<!--
 * @Author: lzy
 * @Date: 2020-07-07 15:53:17
 * @FilePath: \my-init-PC\vue-cli-template-master\src\App.vue
--> 
<template>
  <div id="app">
    <transition name="fade-scale">
      <router-view />
    </transition>
    <x-loading v-model="widgetStoreDate.loading.show" :text="widgetStoreDate.loading.text" :z-index="widgetStoreDate.loading.zIndex" :width="widgetStoreDate.loading.width" :height="widgetStoreDate.loading.height" :background="widgetStoreDate.loading.background"></x-loading>
    <x-toast v-model="widgetStoreDate.toast.show" :text="widgetStoreDate.toast.text" :z-index="widgetStoreDate.toast.zIndex" :background="widgetStoreDate.toast.background" :width="widgetStoreDate.toast.width" :height="widgetStoreDate.toast.height"></x-toast>
    <!-- toast end -->
  </div>
</template>

<script>
import XLoading from '@/components/Loading'
import XToast from '@/components/Toast'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {XLoading,XToast},
  data () {
    return {
    }
  },
  created () {
    //页面刷新，vuex数据不丢失
    // if(sessionStorage.getItem("store")){this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))}window.addEventListener("beforeunload",()=>{sessionStorage.setItem("store",JSON.stringify(this.$store.state))})
  },
  computed: {
    ...mapGetters([
      'widgetStoreDate'
    ])
  }
}
</script>

<style lang="scss">
.el-header{
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  line-height: 200px;
  min-height: 100%;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  line-height: 160px;
}
  
.el-container {
  height: calc(100vh - 60px);
}
.top_header{
  margin-top: 30px;
}
</style>
