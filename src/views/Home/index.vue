<template>
  <div class="home-container" @wheel="changeByWheel" v-loading="isLoading">
    <ul class="main" ref="carouse" @transitionend="wheelEnd">
      <li v-for="(i,index) in data">
        <CarouseItem :carouse="i"></CarouseItem>
        {{ index }}
      </li>
    </ul>
    <div class="arrow">
      <div class="arrow-up"
           v-show="currentActive > 0"
           @click="changeCurrent(currentActive-1)">
        <Icon type="arrowUp"/>
      </div>
      <div class="arrow-down" v-show="currentActive < data.length -1"
           @click="changeCurrent(currentActive+1)">
        <Icon type="arrowDown"/>
      </div>
    </div>
    <ul class="indicator">
      <li v-for="(i,index) in data.length"
          :class="{active:currentActive===index}"
          @click="changeCurrent(index)">
      </li>
    </ul>
  </div>
</template>

<script>
import CarouseItem from "./CarouseItem"
import Icon from "@/components/Icon"
import {mapState} from 'vuex'
export default {
  name: 'home',
  data() {
    return {
      currentActive: 0,
      isWheel:false,
      currentHeight:0,
    }
  },
  components: {
    CarouseItem, Icon
  },
  async created() {
    await this.$store.dispatch('home/fetchHomeData')
  },
  computed:{
    ...mapState('home',['data','isLoading'])
  },
  mounted() {
    this.getCurrentHeight()
    window.addEventListener('resize', this.getCurrentHeight)
  },
  destroyed() {
    window.removeEventListener('resize', this.getCurrentHeight)
  },
  methods: {

    getCurrentHeight(){
      this.currentHeight =  this.$refs.carouse.offsetHeight
    },
    changeCurrent(data) {
      this.currentActive = data
      this.$refs.carouse.style.marginTop = -this.currentActive * this.currentHeight + 'px'
    },
    changeByWheel(e){
      if(this.isWheel){
        return
      }
      if(e.deltaY > 0){
        const data = this.currentActive + 1
        if(data < this.data.length){
          this.isWheel = true
          this.changeCurrent(data)
        }
      }else{
        const data = this.currentActive - 1
        if(data >= 0){
          this.isWheel = true
          this.changeCurrent(data)
        }
      }
    },
    wheelEnd(){
      this.isWheel = false
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

ul {
  margin: 0;
  padding: 0;
}

.arrow-style {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.home-container {
  color: @gray;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  .main {
    width: 100%;
    height: 100%;
    transition: 0.5s;

    li {
      list-style: none;
      width: 100%;
      height: 100%;
    }
  }

  .arrow {
    font-size: 30px;
    color: @gray;
    cursor: pointer;
    @keyframes arrow-up-move {
      0% {
        transform: translateX(-50%) translateY(17px);
      }
      50% {
        transform: translateX(-50%) translateY(-17px);
      }
      100% {
        transform: translateX(-50%) translateY(17px);
      }
    }
    @keyframes arrow-down-move {
      0% {
        transform: translateX(-50%) translateY(-17px);
      }
      50% {
        transform: translateX(-50%) translateY(17px);
      }
      100% {
        transform: translateX(-50%) translateY(-17px);
      }
    }

    .arrow-up {
      padding: 0 15px 15px 15px;
      .arrow-style();
      top: 20px;
      animation: arrow-up-move 2s infinite;
    }

    .arrow-down {
      padding: 0 15px 15px 15px;
      .arrow-style();
      bottom: 20px;
      animation: arrow-down-move 2s infinite;
    }
  }

  .indicator {
    list-style: none;
    .self-center();
    left: auto;
    right: 20px;
    height: 50px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    li {
      cursor: pointer;
      width: 7px;
      height: 7px;
      background-color: @dark;
      border-radius: 50%;
      border: 1px solid #fff;

      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>
