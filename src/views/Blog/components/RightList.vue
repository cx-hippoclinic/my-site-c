<template>
  <div class="right-list-container" >
    <ul>
      <li v-for="(item,index) in list" :class="{active:item.isSelected}" :key="item.id">
        <span @click="changeSelect(item)">{{item.name}}</span>
        <span @click="changeSelect(item)" class="count">{{item.articleCount}}</span>
        <RightList :list="item.children" v-on="$listeners"></RightList>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RightList',
  props:{
    // [{name:'cx',children:[],isSelected:true}]
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods:{
    changeSelect(item){
      this.$emit("changeSelect",item)
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

  ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  li{
    min-height: 40px;
    line-height: 40px;
    li{
      margin-left: 1em;
    }
    span{
      cursor: pointer;
    }
    &.active>span{
      color: @warn;
      font-weight: bold;
    }
  }
  .count{
    margin-left: 10px;
  }

</style>
