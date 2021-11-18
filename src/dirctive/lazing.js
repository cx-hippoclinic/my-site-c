import bus from '@/bus'
import pkq from '@/assets/pkq2.jpg'
import {debound} from "@/util"

let data = [

]
function handle(){
  const clintHeight = document.documentElement.clientHeight
  for (const item of data) {
    const imgTop = item.dom.getBoundingClientRect().top
    const imgHeight = item.dom.offsetHeight || 150
    const calcHeight = imgTop + imgHeight
    if( clintHeight > calcHeight && calcHeight >0){
      item.isShow = true
      createImg(item)
    }else {
      item.isShow = false
    }
    data = data.filter(a=>!a.isShow)
  }
}
function createImg(data){
  const tempImg = new Image()
  tempImg.src = data.img
  tempImg.onload=()=>{
    data.dom.src = data.img
  }
}
export default {
  bind(){
    bus.$on('scroll',debound(handle,50))

  },
  inserted(el,binding){
    el.src = pkq
    data.push({
      dom:el,
      img:binding.value
    })
    handle()
  },

  unbind(el,binding){
    bus.$off('scroll',debound(handle,100))
  }

}
