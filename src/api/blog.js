import instance from "./request"
import request from "./request"
export async function getBlog({page = 1, limit = 10, categoryId = -1}) {
  let res = await instance.get("/api/blog",{
    params: {
      page,
      limit,
      categoryId,
    }
  })

  return res
}

export async function getBlogtype() {
  let res = await instance.get("/api/blogtype")
  return res
}

export async function getBlogDetail(id) {
  let res = await instance.get("/api/blog/" + id)
  return res
}
export async function postBlogComment(option) {
  const nickname = option.nickname
  const content = option.content
  const blogId = option.blogId
  let res = await instance.post("/api/comment",{
    nickname,
    content,
    blogId
  })
  return res
}
export async function getComments(blogid, page = 1, limit = 10) {
  return await request.get("/api/comment", {
    params: {
      blogid,
      page,
      limit,
    },
  });
}
