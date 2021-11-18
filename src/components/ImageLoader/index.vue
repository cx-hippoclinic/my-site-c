<template>
  <div class="image-loader-container">
    <img :src="placeholder"
         class="placeholder"
         v-if="!everyDone"
    >
    <img :src="src" alt=""
         :style="{transition: duration+'ms', opacity: isShow?0:1}"
         @load="show()">
  </div>


</template>

<script>
export default {
  name: 'ImageLoader',
  data(){
    return {
      isShow:true, // 占位符是否显示
      everyDone: false
    }
  },
  props:{
    src:{
      type:String,
      require:true
    },
    placeholder:{
      type:String,
      require:true
    },
    duration:{
      type:Number,
      default:1000
    }
  },
  methods:{
    show(){
      this.isShow = false
      setTimeout(()=>{
        this.everyDone = true
        this.$emit('load')
      },this.duration)
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
  .image-loader-container{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    //测试
    z-index: -333;

    img{
      .self-fill();
      object-fit: cover;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -2;
    }
    img:last-of-type{
      z-index: 0;
    }
    .placeholder{
      filter:blur(2vw)
    }
  }
</style>
