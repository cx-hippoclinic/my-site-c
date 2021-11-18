<template>
  <div class="about-container">
    <iframe :src="url" frameborder="0"></iframe>
  </div>
</template>

<script>
import { getAboutUrl } from '@/api/about'
export default {
  name: 'index',
  data(){
    return{
      url:''
    }
  },
  created() {
    this.fetchAboutUrl()
  },
  methods:{
    fetchAboutUrl() {
      getAboutUrl().then(res=>{
        this.url = res
      })
    }
  }
}
</script>

<style scoped>
  .about-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  iframe{
    width: 100%;
    height: 100%;
  }
</style>
