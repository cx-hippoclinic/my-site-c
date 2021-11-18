import instance from "./request"
async function getBanner(){
  let res = await instance.get("/api/banner")
  return res
}
export default getBanner
