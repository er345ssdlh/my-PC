/*
 * @Author: lzy
 * @Date: 2020-07-07 15:53:17
 * @FilePath: \my-init-PC\vue-cli-template-master\src\store\getters.js
 */
// 放各模块数据 调用this.$store.getters['userPageStoreDate']
const getters = {
  widgetStoreDate: state => state.widget,
  homePageStoreDate: state => state.homePage,
  userPageStoreDate: state => state.userPage,
}

export default getters
