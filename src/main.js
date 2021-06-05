import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueSignature from 'vue-signature-pad'

Vue.config.productionTip = false
Vue.use(VueSignature)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
