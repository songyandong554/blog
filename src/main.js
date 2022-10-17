import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from "./store"
import ElementUI from 'element-ui'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.use(Vuex)
new Vue({
  render: h => h(App),
  router,
  store

}).$mount('#app')
