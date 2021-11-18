<template>
  <div class="carousel-container" @mousemove="getMovePosition" @mouseleave="endMovePosition" ref="container">
    <div class="carousel-img" :style="movePosition" ref="img">
      <ImageLoader :placeholder="completeSrc(carouse.midImg)" :src="completeSrc(carouse.bigImg)"></ImageLoader>
    </div>
    <div class="title" ref="title">{{ carouse.title }}</div>
    <div class="dirc" ref="dirc">{{ carouse.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader"

export default {
  name: 'Carouselitem',
  props: ["carouse"],
  components: {
    ImageLoader
  },
  data() {
    return {
      titleWidth: 0,
      dircWidth: 0,
      containerWidth: 0,
      containerHeight: 0,
      imgWidth: 0,
      imgHeight: 0,
      clientX: null,
      clientY: null,
      disX: 0,
      disY: 0,
    }
  },
  computed: {
    movePosition() {
      if (this.clientX && this.clientY) {
        this.disX = (this.containerWidth - this.imgWidth) / this.containerWidth * this.clientX
        this.disY = (this.containerHeight - this.imgHeight) / this.containerHeight * this.clientY

        return {
          transform: `translate(${this.disX}px, ${this.disY}px)`,
        }
      } else {
        return {
          transform: `translate(${this.disX}px, ${this.disY}px)`,
        }
      }
    }
  },
  methods: {
    completeSrc(src){
      return process.env.VUE_APP_SEVER + src
    },
    getMovePosition(e) {
      const rect = this.$refs.container.getBoundingClientRect()
      const x = e.clientX - rect.x
      const y = e.clientY - rect.y
      this.clientX = x
      this.clientY = y
    },
    getCenterPosition() {
      const x = this.imgWidth - this.containerWidth
      const y = this.imgHeight - this.containerHeight
      this.disX = -x / 2
      this.disY = -y / 2
    },
    endMovePosition() {
      this.clientX = null
      this.clientY = null
      this.getCenterPosition()
    },
    updateWH(){
      this.containerWidth = this.$refs.container.offsetWidth
      this.containerHeight = this.$refs.container.offsetHeight
      this.imgWidth = this.$refs.img.offsetWidth
      this.imgHeight = this.$refs.img.offsetHeight
    }
  },

  mounted() {
    // 获取宽高
    this.updateWH()
    //初始化图片位置
    this.getCenterPosition()
    // 处理title动画
    this.titleWidth = this.$refs.title.offsetWidth
    this.dircWidth = this.$refs.dirc.offsetWidth
    this.$refs.title.style.opacity = 1
    this.$refs.title.style.width = "0px"
    this.$refs.title.style.transition = "1s"

    this.$refs.dirc.style.opacity = 1
    this.$refs.dirc.style.width = "0px"
    this.$refs.dirc.style.transition = "2s 1s"
    // 强制渲染
    this.$refs.title.offsetLeft
    this.$refs.title.style.width = this.titleWidth + 'px'
    this.$refs.dirc.style.width = this.dircWidth + 'px'
    // resize
    window.addEventListener('resize',this.updateWH)
  },
  destroyed() {
    window.removeEventListener('resize',this.updateWH)

  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-img {
  width: 110%;
  height: 110%;
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.3s;
}

.title, .dirc {
  position: absolute;
  left: 50px;
  letter-spacing: 3px;
  color: #fff;
  text-shadow: 1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000,0 -1px 0 #000;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
}

.title {
  top: calc(50% - 45px);
  font-size: 3em;
}

.dirc {
  top: calc(50% + 30px);
  font-size: 2em;
  color: lighten(@gray, 20%);
}
</style>
