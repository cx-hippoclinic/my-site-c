<template>
  <div class="blog-list-container" v-loading="isLoading">
    <h2 v-if="!isLoading">全部分类</h2>
    <RightList :list="data" @changeSelect="solvePath"/>
  </div>
</template>

<script>
import RightList from "./RightList"
import { getBlogtype } from "@/api/blog"
import fetchData from "@/mixin/fetchData"
export default {
  name: 'BlogRightList',
  components:{
    RightList
  },
  mixins:[fetchData([])],
  methods:{
    async getData(){
      let res = await getBlogtype()
      const totalArticle =  res.reduce((a,b)=>a+b.articleCount,0)
      res = [{name:'全部',id:'-1',articleCount:totalArticle,order:'-1'} ,...res]
      const result = res.map((item)=>{
         item.isSelected = this.categories == item.id
        return item
      })
      return result
    },
    solvePath(item){
      const query = {
        page: 1,
        limit: this.limit,
      };
      if(item.id === '-1'){
        this.$router.push({
          name:'blog',
          query
        })
      }else{
        this.$router.push({
          name: "categoryBlog",
          query,
          params: {
            id: item.id,
          },
        });
      }


    }
  },
  computed:{
    categories(){
      return this.$route.params.id || -1
    },
    limit(){
      return this.$route.query.limit || 10
    }
  },
  watch:{
    $route:{
      handler(newVal, oldVal){
        const res = this.data.map(item=>{
          item.isSelected = this.categories == item.id
          return item
        })
        this.data = res
      }
    }
  }

}
</script>

<style scoped>
.blog-list-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
