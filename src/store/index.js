import { install,Store } from 'vuex'
import Vue from 'vue'
import home from './home'
import setting from "./setting"
import project from "./project"
if(!window.Vuex){
  install(Vue)

}
export default new Store({
  modules:{
    home,setting,project
  }
})
