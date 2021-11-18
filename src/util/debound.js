let timer = null
export default function (fn,duration = 100){
  return (...reg)=>{
    clearTimeout(timer)
    timer = setTimeout(
      ()=>{
        fn(...reg)
      },duration)
  }
}
