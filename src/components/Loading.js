export default {
  name: 'XLoading',
  props: {
    value: Boolean,
    zIndex: {
      type: Number,
      default: 9999
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    text: {
      type: String,
      default: '加载中...'
    },
    background: {
      type: String,
      default: 'rgba(0,0,0,0)'
    }
  },
  // eslint-disable-next-line
  render (h) {
    return (
      <div v-show={ this.value } class="x-loading" style={{ zIndex: this.zIndex }}>
        <div class="x-loading-mask" style={{ background: this.background }}></div>
        <div class="x-loading-content" style={{ width: this.width, height:this.height}}>
          <x-svg-icon icon-name="loading"></x-svg-icon>
          <p>{ this.text }</p>
        </div>
      </div>
    )
  }
}
