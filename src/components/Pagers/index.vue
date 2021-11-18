<template>
  <div class="pager-container">
    <a :class="{disabled:current === 1}" @click="changeCurrent(1)">|<<</a>
    <a :class="{disabled:current === 1}" @click="changeCurrent(current-1)"><<</a>
    <a v-for="(item,i) in pagesArr"
       :key="i"
       :class="{active:item===current}"
       @click="changeCurrent(item)"
    >{{ item }}</a>

    <a :class="{disabled:current === totalPage}" @click="changeCurrent(current+1)">>></a>
    <a :class="{disabled:current === totalPage}" @click="changeCurrent(totalPage)">>>|</a>
  </div>
</template>

<script>
export default {
  name: 'Pagers',
  props:{
    total:{
      type:Number,
      default:0
    },
    limit:{
      type:Number,
      default: 10
    },
    visiblePage:{
      type:Number,
      default:10
    },
    current:{
      type:Number,
      default:1
    }
  },
  computed:{
    totalPage(){
      return Math.ceil(this.total / this.limit)
    },

    minPage(){
      let min = this.current - Math.floor(this.visiblePage/2)
      if(min <= 1){
        min = 1
      }
      return min
    },
    maxPage(){
      let max = this.minPage + this.visiblePage -1
      if(max >= this.totalPage){
        max = this.totalPage
      }
      return max
    },
    pagesArr(){
      let arr = []
      for (let i = this.minPage; i <= this.maxPage ; i++) {
        arr.push(i)
      }
      return arr
    }
  },
  methods:{
    changeCurrent(newPage){
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.current) {
        return;
      }
      this.$emit("changeCur",newPage)
    }
  }
}
</script>

<style lang="less" scoped>
  @import "~@/styles/var.less";
  .pager-container{
    text-align: center;
    color: @primary;
    a{
      margin:  0 5px;
      &.disabled{
        color:@lightWords;
        cursor: not-allowed;
      }
      &.active{
        color: @words;
        font-weight: 600;
        cursor: text;
      }
      cursor: pointer;
    }
  }
</style>
