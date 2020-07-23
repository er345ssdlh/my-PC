/*
 * @Author: lzy
 * @Date: 2020-07-07 15:53:17
 * @FilePath: \my-init-PC\vue-cli-template-master\src\utils\index.js
 */
import store from '@/store'

// 存放一些组装好的模态框
export const showLoading = config => store.dispatch('widget/showLoading', config)

export const hideLoading = () => store.dispatch('widget/hideLoading')

export const showToast = config => store.dispatch('widget/showToast', config)

export const hideToast = () => store.dispatch('widget/hideToast')
