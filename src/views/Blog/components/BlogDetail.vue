<template>
  <div class="blog-detail-container">
    <h1>{{data.title}}</h1>
    <p class="aside">
      <span>日期：{{formatDate(data.createDate)}}</span>
      <span>浏览：{{data.scanNumber}}</span>
      <a href="#"><span>评论：{{data.commentNumber}}</span></a>
      <router-link :to="{
        name:'categoryBlog',params:{id:data.category.id}
      }"><span>{{data.category.name}}</span></router-link>
    </p>
    <div v-html="data.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import { formAtDate } from "@/util"
import "@/styles/markdown.css"
import "highlight.js/styles/github.css";
export default {
  name: 'BlogDetail',
  props:{
    data:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    formatDate(d){
      return formAtDate(d)
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
  .blog-detail-container{

    h1{
      font-size: 40px;
    }
    .markdown-body{
      margin-bottom: 20px;
    }
    .aside{
      font-size: 12px;
      span{
        color:@gray;
        margin-right: 15px;
      }
      a:hover span{
        color:@primary ;
      }
    }
  }
</style>
