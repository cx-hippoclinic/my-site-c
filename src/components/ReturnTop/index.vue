<template>
  <div class="return-top-container" @click="scrollTop" v-show="isShow">
    top
  </div>
</template>

<script>
export default {
  name: 'returnTop',
  data(){
    return {
      isShow: false
    }
  },
  created() {
    this.$bus.$on('scroll',this.handleScrollTop)
    this.$bus.$on('end',this.unShow)
  },
  methods:{
    scrollTop(){
      this.$bus.$emit('scrollTop')
    },
    handleScrollTop(dom){
      if(dom.scrollTop > 500){
        this.isShow = true
      }else {
        this.isShow = false
      }
    },
    unShow(){
      this.isShow = false
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.return-top-container{
  position: fixed;
  bottom: 100px;
  right: 100px;
  line-height: 60px;
  text-align: center;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background-color: @primary;
  color:#fff;
  cursor: pointer;
}
</style>
