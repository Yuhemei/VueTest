import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 全局css
import './assets/common.less';
// 全局方法
import "./util/util.js"
Vue.config.productionTip = false


Vue.use(ElementUI,{ size: '', zIndex: 2000 });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
