<template>
  <div class="container">
    <Avatar url="https://pic4.zhimg.com/80/v2-3698d83af556a8675b0c9dff18d0ae87_720w.jpg" :size="150"/>
    <Avatar url="https://www.96weixin.com/Upload/20181128/1543377853336474.jpg" />
  </div>
</template>

<script>
import Avatar from './'

export default {
  name: 'App',
  components: {
    Avatar
  }
}
</script>

  <style lang="less">
  .container{
    width: 500px;
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
