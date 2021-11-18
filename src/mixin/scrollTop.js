export default function (ref){
  return {
    mounted() {
      this.$bus.$on('scrollTop',this.scrollTop)
      this.$refs[ref].addEventListener('scroll',this.handleScroll)
    },
    updated() {
    },
    methods:{
      scrollTop(){
        this.$refs[ref].scrollTop = 0
      },
      handleScroll(){
        this.$bus.$emit('scroll',this.$refs[ref])
      },
    },
    beforeDestroy() {
      this.$refs[ref].removeEventListener('scroll',this.handleScroll)
      this.$bus.$off('scrollTop',this.scrollTop)
      this.$bus.$emit('end')
    }
  }
}
