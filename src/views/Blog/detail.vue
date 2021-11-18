<template>
  <div class="detail-container" v-loading="isLoading">
    <Layout >
      <div class="center-container" ref="detailMain">
        <BlogDetail :data="data" v-if="!isLoading"/>
        <MessageArea :list="list.rows" :title="`评论列表`" :sub-title="list.total+''" ref="messageList"  v-if="!isLoading"
          @handleSubmit="handleSubmit" :isListLoading="isListLoading"
        />
      </div>
      <template #right>
        <div class="right-container">
          <DetailTOC :toc="data.toc"/>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import BlogDetail from "./components/BlogDetail"
import DetailTOC from "./components/DetailTOC"
import Layout from "@/components/Layout"
import MessageArea from "@/components/MessageArea"
import { getBlogDetail,getComments,postBlogComment } from "@/api/blog"
import fetchData from "@/mixin/fetchData"
import scrollTop from "@/mixin/scrollTop"
import { getDetailText } from '@/util'

export default {
  name: 'detail',
  components:{
    BlogDetail,DetailTOC,Layout,MessageArea
  },
  mixins:[fetchData({}),scrollTop("detailMain")],
  data(){
    return {
      list:[],
      isListLoading:false
    }
  },
  computed:{
    id(){
      return this.$route.params.id
    },
  },

  destroyed() {
    this.$bus.$off('scroll',this.handleComment)
  },
  methods:{
    async getData(){
      const res =  await getBlogDetail(this.id)
      console.log(res)
      getDetailText(res.title)
      return res
    },
    async handleSubmit(data,cb){
      const option  = {...data, blogId:this.id}
      const res = await postBlogComment(option)
      this.list.rows.unshift(res)
      this.list.total ++
      cb()
    },


    async handleComment(){
      const range = 200
      const top = this.$refs.detailMain.scrollTop
      const height = this.$refs.detailMain.scrollHeight
      const h = this.$refs.detailMain.clientHeight
      if(this.isListLoading === false && height - top < h+range &&this.list.rows.length < this.list.total){
        this.isListLoading = true
        const res = await getComments(this.id,2)
        this.list.rows = this.list.rows.concat(res.rows)
        this.isListLoading = false
      }
    }
  },
  async created() {
    const res = await getComments(this.id)
    this.list = res
  },
  mounted() {
    this.$bus.$on('scroll',this.handleComment)
  }
}
</script>

<style scoped>
.center-container{
  position: relative;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 10px 20px;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;

}
</style>
