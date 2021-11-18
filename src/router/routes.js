import "nprogress/nprogress.css"
import { start, done, configure } from 'nprogress'
import Unfind from "@/components/Unfind"
configure({
  trickleSpeed: 20,
  showSpinner: false,
})
 function delay(time){
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve()
    },time)
  })

}
function loadingBar(fn) {
  return async ()=>{
    start()
    if(process.env.NODE_ENV === 'development'){
      await delay(2000)
    }
    const Comp = await fn()
    done()
    return Comp
  }
}

export default [
  {name: "home", path: "/", component: loadingBar(() => import("@/views/Home")), meta: {title: '首页'}},
  {name: "blog", path: "/article", component: loadingBar(() => import("@/views/Blog")), meta: {title: '文章'}},
  {name: "categoryBlog", path: "/article/cate/:id", component: loadingBar(() => import("@/views/Blog"))},
  {name: "BlogDetail", path: "/article/:id", component:loadingBar( () => import( "@/views/Blog/detail")), meta: {title: '文章详情'}},
  {name: "about", path: "/about", component: loadingBar(() => import("@/views/About")), meta: {title: '关于我'}},
  {name: "project", path: "/project", component: loadingBar(() => import("@/views/Project")), meta: {title: '项目&效果'}},
  {name: "message", path: "/message", component: loadingBar(() => import("@/views/Message")), meta: {title: '留言板'}},
  {name:'404',path: "*",component: Unfind,meta: {title: '404'}}
]
