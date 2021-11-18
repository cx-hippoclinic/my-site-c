<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="asides">
          <SiteAside/>
        </div>
      </template>
      <template>
        <router-view/>
      </template>
    </Layout>
    <ReturnTop />
  </div>
</template>

<script>
import Layout from "./components/Layout"
import SiteAside from "./components/SiteAside"
import ReturnTop from "./components/ReturnTop"
import "./styles/global.less"

export default {
  name: 'App',
  data(){
    return {
    }
  },
  components: {
    Layout,SiteAside,ReturnTop
  },

}
</script>

<style lang="less" scoped>

  .asides{
    height: 100vh;
    width: 240px;
  }
</style>
