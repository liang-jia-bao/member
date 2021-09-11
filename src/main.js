import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import 'normalize.css'
import store from './store/index'
Vue.config.productionTip = false
Vue.use(elementUI)

import '@/router/permission.js'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
