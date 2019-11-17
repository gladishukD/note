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

import * as firebase from 'firebase/app'

// Add the Firebase services that you want to use
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyCeqK9BM_gyPwH0sA5FkBCOg1J4xc43QBo',
  authDomain: 'write-2add0.firebaseapp.com',
  databaseURL: 'https://write-2add0.firebaseio.com',
  projectId: 'write-2add0',
  storageBucket: 'write-2add0.appspot.com',
  messagingSenderId: '942620988544',
  appId: '1:942620988544:web:85b80ab33aebca2eab4265',
  measurementId: 'G-CBFLF4BPYW'
})

export const db = firebase.firestore()

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
