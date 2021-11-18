import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from "@/router"
import { showMessage } from "@/util/"
import getBanner from "@/api/banner"
// import "./mock"
import store from './store'
import loading from "@/dirctive/loading"
import lazing from "@/dirctive/lazing"
import  "./bus"

Vue.use(VueRouter)
Vue.prototype.showMessage = showMessage
Vue.directive("loading", loading)
Vue.directive("lazing", lazing)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

