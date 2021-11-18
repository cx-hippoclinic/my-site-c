<template>
  <div class="test-container">
    <ImageLoader
        src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
        placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
    />
  </div>

</template>

<script>
import ImageLoader from "./"
export default {
  name: 'test',
  components:{
    ImageLoader
  }
}
</script>

<style scoped>
  .test-container{
    width: 600px;
    height: 420px;
    border: 2px solid #000;
  }
</style>
