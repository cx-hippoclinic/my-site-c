<template>
  <ul class="menu-container">
    <router-link :to="{name:item.name}" v-for="item in data" :key="item.name" :exact="item.exact">
      <li>
          <Icon :type="item.type"></Icon>
          <span>{{ item.text }}</span>
      </li>
    </router-link>
  </ul>
</template>

<script>
import Icon from "@/components/Icon"
export default {
  name: 'Menu',
  data(){
    return{
      active:"/",
      data:[
        {text:"首页",type:"home",name:"home",exact:true},
        {text:"文章",type:"blog",name:"blog",exact:false},
        {text:"关于我",type:"about",name:"about",exact:true},
        {text:"项目&效果",type:"code",name:"project",exact:true},
        {text:"留言板",type:"chat",name:"message",exact:true}
      ]
    }
  },
  components:{
    Icon
  },
  methods:{
    isActive(item){
      var link = item.link.toLowerCase(); // 菜单的链接地址
      var curPathname = location.pathname.toLowerCase(); // 当前浏览器的访问路径
      if (item.startWith) {
        return curPathname.startsWith(link);
      } else {
        return curPathname === link;
      }
    }
  }

}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
  .menu-container{
    padding:0;
    li{
      font-size: 20px;
      height: 40px;
      line-height: 40px;
      list-style: none;
      color:  @lightWords;
      display: flex;
      padding-left: 20%;
      span{
        padding-left: 8px;
      }
    }
    a.router-link-active{
      display: block;
      color: white;
      background-color: @words;
    }
  }


  a:hover{
    color:unset;
  }

</style>
