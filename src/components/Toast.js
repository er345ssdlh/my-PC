/*
 * @Author: lzy
 * @Date: 2020-07-07 15:53:17
 * @FilePath: \vue-cli-template-master\vue-cli-template-master\src\components\Toast.js
 */ 
export default {
  name: 'XToast',
  props: {
    value: Boolean,
    text: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 9999
    },
    width: {
      type: String
    },
    height: {
      type: String
    }
  },
  // eslint-disable-next-line
  render (h) {
    return (
      <div v-show={ this.value } class="x-toast" style={{ zIndex: this.zIndex }}>
        <div class="x-toast-mask" style={{ background: this.background }}></div>
        <div class="x-toast-content" style={{ width: this.width, height:this.height}}>{ this.text }</div>
      </div>
    )
  }
}
