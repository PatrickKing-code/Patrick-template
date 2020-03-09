import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import VueCompositionApi from '@vue/composition-api'
// 自定义全局方法
import global from './utils/global'
import './icon'
Vue.config.productionTip = false
Vue.use(global)
Vue.use(VueCompositionApi)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
