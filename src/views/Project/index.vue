<template>
  <div class="project-container" ref="projectContainer" v-loading="isLoading">
    <div v-for="item in data" :key="item.id" class="project-item">
      <a
          :href="
          item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
        "
          :target="item.url ? '_blank' : '_self'"
      >
        <img class="thumb" v-lazing="completeSrc(item.thumb)" />
      </a>
      <div class="info">
        <h2>
          <a
              :href="
              item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
            "
              :target="item.url ? '_blank' : '_self'"
          >
            {{ item.name }}
          </a>
        </h2>
        <a
            class="github"
            target="_blank"
            :href="item.github"
            v-if="item.github"
        >
          github
        </a>
        <p v-for="(desc, i) in item.description" :key="i">
          {{ desc }}
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import scroll from "@/mixin/scrollTop"
import { mapState } from 'vuex'
export default {
  name: 'index',
  mixins:[scroll('projectContainer')],
  created() {
    this.$store.dispatch('project/fetchProjectData')
  },
  computed:mapState('project',['data','isLoading']),
  methods:{
    completeSrc(src){
      return process.env.VUE_APP_SEVER + src
    },

  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.project-container {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.project-item {
  transition: 0.5s;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
  .thumb {
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .info {
    line-height: 1.7;
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .github {
    font-size: 14px;
    color: @primary;
  }
}
</style>

