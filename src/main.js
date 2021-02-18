import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.prototype.$axios = axios
//axios.defaults.baseURL = '/api'

Vue.use(VueAwesomeSwiper) 
Vue.use(VueRouter)

Vue.config.productionTip = false


router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


