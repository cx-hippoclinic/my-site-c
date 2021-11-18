import loading from "@/assets/loading.svg"
import style from "./loading.module.less"
function createImg(){
  const img = document.createElement("img")
  img.dataset.role = "loading"
  img.src = loading
  img.className = style.load
  return img
}
function getImg(el){
  const hasImg = el.querySelector('img[data-role=loading]')
  return hasImg
}
export default function (el,binding){
  let hasImg = getImg(el)
  if(binding.value){
    if(!hasImg){
      const img = createImg()
      el.appendChild(img)
    }
  }else {
    if(hasImg){
      hasImg.remove()
    }
  }
}
