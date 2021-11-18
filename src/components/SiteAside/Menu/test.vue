<template>
  <div class="test-container">
    <Menu/>
  </div>
</template>

<script>
import Menu from "./"

import "@/styles/global.less"
export default {
  name: 'test',
  components:{
    Menu
  },

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
