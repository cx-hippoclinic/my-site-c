<template>
  <div class="detail-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @changeSelect="solveChange"/>
  </div>
</template>

<script>
import RightList from "./RightList"
import { debound } from "@/util"
export default {
  name: 'DetailTOC',
  components:{
    RightList
  },
  props:{
    toc:{
      type:Array,
      default(){
        return []
      }
    },
  },
  data(){
    return{
      auchor:[],
      doms:[],
      currentAuchor:''
    }
  },
  methods:{
    solveChange(item){
      location.hash = item.anchor
    },
    getAnchor(data){
      for (const datum of data) {
        this.auchor.push(datum.anchor)
        if(datum.children){
          this.getAnchor(datum.children)
        }
      }
    },

    solveScroll(){
      const limit = 100
      for (let item of this.doms) {
        let top = item.getBoundingClientRect().top
        if(Math.abs(top) < limit){
          this.currentAuchor = item.id
          return
        }else if(top < -limit){
          this.currentAuchor = item.id
        }else {
          return
        }
      }
    }
  },
  created() {
    this.getAnchor(this.toc)
  },
  mounted() {
    for (const item of this.auchor) {
      this.doms.push(document.getElementById(item))
    }
    this.$bus.$on('scroll',debound(this.solveScroll,50))
  },
  computed:{
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelected: t.anchor === this.currentAuchor,
          children: getTOC(t.children),
        }));
      };
      return getTOC(this.toc);
    },
  }

}
</script>

<style scoped>
.detail-toc-container{
    h2 {
      font-weight: bold;
      letter-spacing: 2px;
      font-size: 1em;
      margin: 0;
    }
}
</style>
