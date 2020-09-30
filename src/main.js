import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString().slice(2, 8)
  }
})
Vue.filter('toupcase', function (value) {
  return value.toUpperCase()
})
Vue.filter('sinpp', function (value) {
  return value.slice(0, 100) + "..."
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
