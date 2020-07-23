/*
 * @Author: lzy
 * @Date: 2020-07-07 15:53:17
 * @FilePath: \my-init-PC\vue-cli-template-master\babel.config.js
 */
const plugins = ["@vue/babel-plugin-transform-vue-jsx"]
// 生产环境移除console
console.log('环境 :', process.env.NODE_ENV)
if(process.env.NODE_ENV === 'production') {
  plugins.push("transform-remove-console")
}
module.exports = {
  plugins: plugins,
  presets: [
    [
      '@vue/app', {
        modules: false,
        targets: {
          browsers: ["> 1%", "last 2 versions", "not ie <= 8", "Android >= 4", "iOS >= 8"]
        },
        useBuiltIns: 'entry',
      }
    ]
  ]
}
