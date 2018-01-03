import '../css/main.css'

import Vue from 'vue'
import Clair from 'clair'

import router from '../router'

Vue.use(Clair)

new Vue({
  router,
  render: h => h('router-view')
}).$mount('#app')
