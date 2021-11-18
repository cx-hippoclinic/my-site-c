import VueRouter from "vue-router"
import Vue from "vue"
import routes from "./routes"
import {getRoutText,getDetailText} from "@/util"
import store from '@/store'
if(!window.VueRouter){
  Vue.use(VueRouter)
}
Vue.use(VueRouter)
const router =  new VueRouter({
  routes,
  mode:"history"
})
router.afterEach((to,from)=>{
  getRoutText(to.meta.title)
  getDetailText(store.state.setting.data.siteTitle)

})
export default router
