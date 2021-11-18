<template>
  <ul class="contact-container">
    <li v-for="i in datas" :key="i.type">
      <a :href="i.src">
        <Icon :type="i.type"/>
        <span>{{ i.name }}</span>
      </a>
      <div class="pop" v-if="i.isCode">
        <img :src="getImgSrc(i.isCode)" alt=""/>
      </div>
    </li>

  </ul>
</template>

<script>
import Icon from "@/components/Icon"
import { mapState } from "vuex"

export default {
  name: 'index',
  data() {
    return {
      datas: []
    }
  },
  computed: mapState('setting',['data']),
  async created() {
    await this.$store.dispatch('setting/fetchSetData')
    this.datas = [ {name:this.data.githubName, type: "github", link: this.data.github,isCode: this.data.qqQrCode},
      {name:this.data.mail,type:"mail",link:"mailto:695996211@qq.com"},
      {name:this.data.qq,type:"qq",link:"tencent://message/?Menu=yes&uin=695996211&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"},
      {name:this.data.weixin,type:"weixin",link:"",isCode:this.data.weixinQrCode}]
  },
  components: {
    Icon
  },
  methods:{
    getImgSrc(src){
      return process.env.VUE_APP_SEVER + src
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@itemHeight: 30px;
.contact-container {
  padding: 0;
  color: @lightWords;
  width: 100%;
  li{
    list-style: none;
    height:@itemHeight ;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a{
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    display: flex;
    cursor: pointer;

    span {
      margin-left: 10px;
    }

    position: relative;

  }

  .pop {
    position: absolute;
    left: 10px;
    bottom: @itemHeight + 7px;
    padding: 10px 15px;
    background: #fff;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #fff;
      bottom: -4px;
    }
    img {
      width: 150px;
      height: 150px;
    }


  }

  .icon-container {
    font-size: 30px;
  }

  li:last-of-type {
    text-indent: -3px;

    .icon-container {
      font-size: 37px;
    }
  }
}

</style>
