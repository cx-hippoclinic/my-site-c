<template>
  <div class="blog-container">
    <Layout>
      <template #default>
        <div class="center">
          <BlogList/>
        </div>
      </template>
      <template #right>
        <div class="right">
          <BlogRightList />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout"
import BlogList from "@/views/Blog/components/BlogList"
import BlogRightList from "@/views/Blog/components/BlogRightList"

export default {
  name: 'Blog',
  components:{
    BlogList,BlogRightList,Layout
  },

}
</script>

<style scoped>

.center{
  height: 100vh;
  position: relative;
  overflow: auto;
  margin-bottom: 20px;
}
.right{
  height: 100%;
  width: 240px;
}
</style>
