<template>
  <div id="app">
    <Pagers :total="303" :current="current" @changeCur="updateCur($event)"></Pagers>
  </div>
</template>

<script>

import Pagers from "./"

export default {
  name: 'App',
  data(){
    return {
      current:12
    }
  },
  components: {
    Pagers
  },
  methods:{
    updateCur(i){
      //更新页面
      this.current = i
    }
  }
}
</script>

<style lang="less">

</style>
