<!--
 * @Author: lzy
 * @Date: 2020-07-15 15:59:56
 * @FilePath: \my-init-PC\vue-cli-template-master\src\pages\applicationCenter\index.vue
--> 
<template>
  <div class="layout">
    <div class="layout-item">
      <h4>传入html内容</h4>
      <div class="demo">
        <pikaz-iframe :setting="setting2">
        </pikaz-iframe>
      </div>
    </div>
    <div class="layout-item">
      <h4>传入html内容并隐藏滚动条</h4>
      <div class="demo">
        <pikaz-iframe :setting="setting3">
        </pikaz-iframe>
      </div>
    </div>
    <div class="layout-item">
      <h4>传入html内容并修改样式</h4>
      <div class="demo">
        <pikaz-iframe :setting="setting4">
        </pikaz-iframe>
      </div>
    </div>
    <div class="layout-item">
      <h4>onload事件</h4>
      <div class="demo">
        <pikaz-iframe :setting="setting5" @onload="onload">
        </pikaz-iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { PikazIframe } from '../../components/plugin'
import { doc } from '../../mock/data/socdoc'
export default {
  props: {},
  components: { PikazIframe },
  data () {
    return {
      setting1: {
        src: "https://m.baidu.com/"
      },
      setting2: {
        srcdoc: doc
      },
      setting3: {
        hideScrolling: true,
        srcdoc: doc
      },
      setting4: {
        srcdoc: doc,
        css: `
          div{
            color:red;
            height: 50px;
            line-height:50px;
            text-align: center;
          }
      `
      },
      setting5: {
        src: "https://m.baidu.com/"
      }
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    onload () {
      console.log("加载成功")
    }
  },
  computed: {},
  watch: {},
}
</script>

<style scoped>
.layout {
  display: flex;
}
.layout-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 30px;
}
.demo {
  width: 375px;
  height: 700px;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(230, 230, 230, 1);
}
</style>