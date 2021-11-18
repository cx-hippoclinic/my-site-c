<template>
  <div class="unfind-container">
    <img :src="imgSrc" alt="">
  </div>
</template>

<script>
import img404 from '@/assets/404.jpg'
export default {
  name: 'Unfind',
  data(){
    return {
      imgSrc: img404
    }
  }
}
</script>

<style scoped lang="less">
.unfind-container{
  width: 100%;
  height: 100vh;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
