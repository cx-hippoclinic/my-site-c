<template>
  <div class="container">
    <Icon v-for="(item,i) in map" :type="item" :key="i"></Icon>
  </div>
</template>

<script>
import Icon, { classMap } from "./"

export default {
  name: 'App',
  data() {
    return {
      map:Object.keys(classMap)
    }
  },
  components: {
    Icon
  }

}
</script>

<style lang="less" scoped>
  .container{
    width: 500px;
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .icon-container{
    font-size: 35px;
    padding: 10px;
  }
</style>
