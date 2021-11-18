<template>
  <div class="blog-list-container" v-loading="isLoading" ref="blog">
    <ul v-if="data.rows">
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb">
          <router-link :to="{name:'BlogDetail',params:{id:item.id}}">
            <img
                v-if="item.thumb"
                v-lazing="completeSrc(item.thumb)"
                :alt="item.title"
                :title="item.title"
            />
          </router-link>
        </div>
        <div class="main">
          <router-link :to="{name:'BlogDetail',params:{id:item.id}}">
            <h2>{{ item.title }}</h2>
          </router-link>
          <div class="aside">
            <span>日期：{{formDate(item.createDate)}}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论{{ item.commentNumber }}</span>
            <router-link :to="{
              name:'categoryBlog',params:{id:item.category.id}
            }" >{{ item.category.name }}</router-link>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <Pagers
        :total="data.total"
        :limit="+routeInfo.limit"
        :current="+routeInfo.page"
        @changeCur="updateCur($event)"
        v-if="!isLoading &&data.rows"
    />
    <Empty v-if="!isLoading && !data.rows" />
  </div>
</template>

<script>
import Pagers from "@/components/Pagers"
import { getBlog } from "@/api/blog"
import fetchData from "@/mixin/fetchData"
import scrollTop from "@/mixin/scrollTop"
import Empty from "@/components/Empty"
import { formAtDate } from "@/util"
export default {
  name: 'BlogList',
  components:{
    Pagers,Empty
  },

  mixins:[fetchData({}),scrollTop('blog')],

  methods:{
    async getData(){
      const res = await getBlog(this.routeInfo)
      return res
    },
    formDate(data){
      return  formAtDate(data)
    },
    completeSrc(src){
      return process.env.VUE_APP_SEVER + src
    },

    updateCur(newPage){
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      if (this.routeInfo.categoryId === -1) {
        this.$router.push({
        name:"blog",
        query
      })}else {
        // /article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "categoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    }
  },

  computed:{
    routeInfo() {
      const categoryId = this.$route.params.id || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },

  watch:{
    ["$route.params"]:{
      async handler(newVal,oldVal){
        this.isLoading = true
        this.$refs.blog.scrollTo(0,0)
        this.data = await getBlog(this.routeInfo)
        this.isLoading = false
      }
    }
  }

}
</script>


<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
