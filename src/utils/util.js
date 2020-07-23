/*
 * @Author: lzy
 * @Date: 2020-07-07 17:27:22
 * @FilePath: \vue-cli-template-master\vue-cli-template-master\src\utils\util.js
 */

// 获取查询参数
export const getQueryParams = params => {
  const obj = {}
  const _params = window.decodeURIComponent(params)
  _params.split('&').map(item => {
    item.replace(/([^?&]*)=([^?&]*)/, (match, $1, $2) => {
      obj[$1] = $2
    })
  })
  return obj
}

// 千分位
export const formatNumber = num => String(num).replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,')

// 获取指定名称的cookie
export const  getCookie = name => {
  var strcookie = document.cookie;//获取cookie字符串
  var arrcookie = strcookie.split("; ");//分割
  //遍历匹配
  for ( var i = 0; i < arrcookie.length; i++) {
      var arr = arrcookie[i].split("=");
      if (arr[0] == name){
          return arr[1];
      }
  }
  return "";
}

// 打印所有cookie
export const print = () => {
  var strcookie = document.cookie;//获取cookie字符串
  var arrcookie = strcookie.split(";");//分割

  //遍历匹配
  for ( var i = 0; i < arrcookie.length; i++) {
      var arr = arrcookie[i].split("=");
      console.log(arr[0] +"：" + arr[1]);
  }
}