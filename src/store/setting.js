import { getSetting } from '@/api/setting'
import { getDetailText } from '@/util'
export default {
  namespaced:true,
  state:{
    data:[],
    isLoading:false
  },
  mutations:{
    changeLoading(state,payload){
      state.isLoading=payload
    },
    getData(state,payload){
      state.data=payload
    }
  },
  actions:{
    async fetchSetData(ctx){
      if(ctx.state.data.length>0){
        return
      }
      ctx.commit('changeLoading',true)
      const res = await getSetting()
      ctx.commit('getData',res)
      ctx.commit('changeLoading',false)
      if(res.favicon){
        let link = document.querySelector("link[ref='shortcut icon']")
        if(link){
          return
        }``
        link = document.createElement('link')
        link.rel="shortcut icon"
        link.type="images/x-icon"
        link.href = res.favicon
        document.querySelector('head').appendChild(link)
      }
      if(res.siteTitle){
        getDetailText(res.siteTitle)
      }
    }
  }
}

