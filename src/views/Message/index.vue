<template>
  <div class="message-container" ref="messageArea">
    <MessageArea
        title="留言板"
        :sub-title="`${data.total}`"
        :list="data.rows"
        :isListLoading="isListLoading"
        @handleSubmit="solveSubmit"

    />
  </div>
</template>

<script>
import MessageArea from '@/components/MessageArea'
import fetchData from "@/mixin/fetchData"
import scrollTop from "@/mixin/scrollTop"
import { getMessages,postMessage } from "@/api/message"
// import { getComments, postBlogComment } from "@/api/blog"
export default {
  name: 'index',
  mixins:[fetchData({total:0,rows:[]}),scrollTop('messageArea')],
  components:{
    MessageArea
  },
  data(){
    return {
      isListLoading:false
    }
  },
  methods:{
    async getData(){
      const res = await getMessages()
      return res
    },
    async solveSubmit(data,cb){
        const res = await postMessage(data)
        this.data.rows.unshift(res)
        cb('评论成功')
        if(res){
          this.data.total ++
        }


    },
    async handleComment(){
      const range = 200
      const top = this.$refs.messageArea.scrollTop
      const height = this.$refs.messageArea.scrollHeight
      const h = this.$refs.messageArea.clientHeight
      if(this.isListLoading === false && height - top < h+range &&this.data.rows.length < this.data.total){
        this.isListLoading = true
        const res = await getMessages(this.id,10)
        this.data.rows = this.data.rows.concat(res.rows)
        this.isListLoading = false
      }
    }
  },
  mounted() {
    this.$bus.$on('scroll',this.handleComment)
  },
  destroyed() {
    this.$bus.$off('scroll',this.handleComment)
  },
}
</script>

<style scoped>
.message-container{
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 5% 15% 3%;
  overflow-y: auto;
  scroll-behavior: smooth;
}
</style>
