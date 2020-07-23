/*
 * @Author: lzy
 * @Date: 2020-07-16 11:27:35
 * @FilePath: \my-init-PC\vue-cli-template-master\src\mixins\mixin.js
 */ 
export default {
  data() {
    return {
      mixins: "this is a mixins"
    };
  },
  methods: {
    //测试输出mixins
    showMixins() {
      console.log(this.mixins);
    }
  }
};