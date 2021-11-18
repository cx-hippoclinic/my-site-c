<template>
  <div class="test-container">
    <Contact/>
  </div>
</template>

<script>
import Contact from "./"
import "@/styles/global.less"
export default {
  name: 'test',
  components:{
    Contact
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
  .test-container{
    position: relative;
    margin: 100px auto;
    width: 500px;
    height: 400px;
    border: 2px solid #000;
    background-color: @dark;
  }
</style>
