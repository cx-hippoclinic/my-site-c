let routeTitle = ''
let detailTitle = ''

export function getRoutText(text){
  routeTitle = text
  mergeTitle()
}
export function getDetailText(text){
  detailTitle = text
  mergeTitle()
}
function mergeTitle(){
  let title = ''
  if(routeTitle && detailTitle){
    title = routeTitle + '-' + detailTitle
  }else if(routeTitle){
    title = routeTitle
  }else if(detailTitle){
    title = detailTitle
  }else {
    title = '个人博客'
  }
  let titleDom = document.querySelector('title')
  if(!titleDom){
    titleDom=document.createElement('title')
    titleDom.innerText = title
    document.head.appendChild(titleDom)
  }else {
    titleDom.innerText = title
  }

}
