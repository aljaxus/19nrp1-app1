import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import VueSocketIOExt from 'vue-socket.io-extended'
import io from 'socket.io-client'

const socket = io(`http://${window.location.hostname}:1923`)
console.log(socket)

Vue.use(VueSocketIOExt, socket)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  el: '#app',
  render: h => h(App),
})
