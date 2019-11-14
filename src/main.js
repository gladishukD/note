import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import uk from 'vee-validate/dist/locale/uk'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toaster from 'v-toaster'
import 'v-toaster/dist/v-toaster.css'

Validator.localize(uk)
Vue.use(VeeValidate, {
  delay: 1000
})
Validator.localize('uk', uk)

Vue.use(Toaster, { timeout: 5000 })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
