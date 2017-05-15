// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { router } from './router'
// 'xa-components' is from '../src', see webpack.base.conf.js alias
import xaComponents from 'xa-components'

Vue.config.productionTip = false

Vue.use(xaComponents)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
