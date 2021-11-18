import instance from "./request"
export async function getAboutUrl(){
  let res = await instance.get("/api/about")
  return res
}
