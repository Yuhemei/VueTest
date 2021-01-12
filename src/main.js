import Vue from 'vue'
import App from './App.vue'
import router from './router'
import util from './util/util'
Vue.config.productionTip = false

new Vue({
  router,
  
  render: h => h(App)
}).$mount('#app')
