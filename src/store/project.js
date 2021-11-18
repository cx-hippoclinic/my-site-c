import {getProjects} from '@/api/project'
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
    async fetchProjectData(ctx){
      if(ctx.state.data.length>0){
        return
      }
      ctx.commit('changeLoading',true)
      const res = await getProjects()
      ctx.commit('getData',res)
      ctx.commit('changeLoading',false)
    }
  }
}
