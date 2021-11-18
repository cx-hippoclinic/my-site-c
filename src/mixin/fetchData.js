export default function (def) {
  return {
    data() {
      return {
        data: def,
        isLoading: true
      }
    },
    created() {
      this.getData().then(r => {
        this.data = r
        this.isLoading = false
      })
    },
  }
}
