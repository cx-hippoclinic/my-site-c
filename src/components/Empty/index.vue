<template>
  <div class="empty-container">
    <Icon type="empty"></Icon>
    <p>{{text}}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon"
export default {
  name: 'Empty',
  components:{
    Icon
  },
  props:{
    text:{
      type:String,
      default:"无数据"
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
  .empty-container{
    .self-center();
    color: @gray;
    text-align: center;
  }
  .icon-container{
    font-size: 80px;
  }
</style>
