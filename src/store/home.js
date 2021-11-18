import getBanner from '@/api/banner'
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
    async fetchHomeData(ctx){
      if(ctx.state.data.length>0){
        return
      }
      ctx.commit('changeLoading',true)
      const res = await getBanner()
      ctx.commit('getData',res)
      ctx.commit('changeLoading',false)
    }
  }
}
