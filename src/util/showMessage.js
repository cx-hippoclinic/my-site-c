import getComponentRootDom from "./getComponentDom"
import Icon from "@/components/Icon"
import style from "./message.module.less"

export default function showMessage(option = {}){
  const text = option.text
  const type = option.type || "info"
  const duration = option.duration || 500
  let dom = option.dom || document.body

  const div = document.createElement("div")
  const span = document.createElement("span")

  dom.style.position = "relative"
  const icon = getComponentRootDom(Icon, {type})
  span.innerText = text
  div.className = style.message + ' ' + `${style['message-'+type]}`
  div.appendChild(icon)
  div.appendChild(span)
  dom.appendChild(div) // 添加到页面
  div.clientHeight //强制重新渲染

  div.style.opacity = 1
  div.style.transform = `translate(-50%, -50%)`

  setTimeout(()=>{
    div.style.opacity = 0
    div.style.transform = `translate(-50%, -50%) translateY(-25px)`
    div.addEventListener("transitionend",function (){
      option.callback && option.callback()
    }, {once:true})
  },duration)
}
