<template>
  <div class="site-aside-container">
    <Avatar :size="150" :src="getImgSrc(data.avatar)"/>
    <h1 class="title">{{ data.siteTitle }}</h1>
    <div class="mid-menu">
      <Menu/>
    </div>
    <div class="button-menu">
      <Contact/>
    </div>
    <p class="footer">
      {{data.icp}}
    </p>
  </div>
</template>

<script>
import Avatar from "../Avatar"
import Menu from "./Menu"
import Contact from "./Contact"
import {mapState} from 'vuex'

export default {
  name: 'index',
  components:{
    Avatar,Menu,Contact
  },
  computed:mapState('setting',['data']),
  methods:{
    getImgSrc(src){
      return process.env.VUE_APP_SEVER + src
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
  .site-aside-container{
    width: 100%;
    height: 100%;
    background: @dark;
    padding: 20px 0;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: center;
  }
.mid-menu{
  margin: 50px 0;
}
.button-menu{
  margin: 100px 0;
}
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>
