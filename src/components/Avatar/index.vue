<template>

  <img class="avatar-container" :src="url" alt="" :style="{width:size+'px',height:size+'px'}" >
</template>

<script>
export default {
  name: 'Avatar',
  props:{
    url:{
      type:String,
      require:true
    },
    size:{
      type:Number,
      default:150
    }
  }
}
</script>

<style scoped>
  .avatar-container{
    border-radius: 50%;
  }
</style>
