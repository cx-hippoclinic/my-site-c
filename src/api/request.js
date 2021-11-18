import axios from "axios"
import showMessage from "@/util/showMessage"
const instance = axios.create()
instance.interceptors.response.use(function (res){
  if(res.data.code !== 0){
    showMessage({
      type:"error",
      text:res.data.msg,
      duration:1000
    })
  }else {
    return res.data.data
  }
  return null
})
export default instance
