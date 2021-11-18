<template>
  <div class="test-container">
    <Empty text="没有数据哈"></Empty>
  </div>
</template>

<script>
import Empty from "./"
export default {
  name: 'test',
  components:{
    Empty
  }
}
</script>

<style scoped>
  .test-container{
    position:relative;
    width: 500px;
    height: 500px;
    border: 2px solid #000;
  }
</style>
