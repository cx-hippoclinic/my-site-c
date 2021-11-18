<template>
  <div class="test-container">
    <SiteAside/>
  </div>
</template>

<script>
import SiteAside from "./"
import "@/styles/global.less"

export default {
  name: 'test',
  components:{
    SiteAside
  }
}
</script>

<style scoped>
.test-container {
  width: 250px;
  height: 1000px;
  border: 2px solid;
  margin: 0 auto;
}
</style>
