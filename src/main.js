import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 全局css
import './assets/common.less';
// 全局方法
import "./util/util.js"
Vue.config.productionTip = false

new Vue({
  router,

  render: h => h(App)
}).$mount('#app')
