import Mock from "mockjs";
import qs from "querystring";

Mock.mock("/api/message", "post", {
  code: 0,
  msg: "",
  data: {
    id: "@guid",
    nickname: "@cname",
    content: "@cparagraph(1, 10)",
    createDate: Date.now(),
    "avatar|1": [
      "https://img2.baidu.com/it/u=1314911232,3565826320&fm=26&fmt=auto",
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0828%252F70f34b16j00qyj7t70035c000j600j6c.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635836868&t=ca9ea9113d71d08023083c0657e5a666",
      "https://img1.baidu.com/it/u=4257022723,1357471486&fm=26&fmt=auto",
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx2.sinaimg.cn%2Fmw690%2F006N3cDfly1gu2ewedespj60oc0ocq4p02.jpg&refer=http%3A%2F%2Fwx2.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635836989&t=47bf03eec4e5f67353c1865840316b1a",
    ],
  },
});

Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function(options) {
  const query = qs.parse(options.url);

  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      total: 52,
      [`rows|${query.limit || 10}`]: [
        {
          id: "@guid",
          nickname: "@cname",
          content: "@cparagraph(1, 10)",
          createDate: Date.now(),
          "avatar|1": [
            "https://img2.baidu.com/it/u=1314911232,3565826320&fm=26&fmt=auto",
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0828%252F70f34b16j00qyj7t70035c000j600j6c.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635836868&t=ca9ea9113d71d08023083c0657e5a666",
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.huabanimg.com%2Fdc93214a04f5d195e49f09c17a4aab9fcdf19f8e11897-Cf80wh_fw658&refer=http%3A%2F%2Fhbimg.huabanimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635836907&t=26125eb85b0dcb5669e68db41893cda2",
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx2.sinaimg.cn%2Fmw690%2F006N3cDfly1gu2ewedespj60oc0ocq4p02.jpg&refer=http%3A%2F%2Fwx2.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635836989&t=47bf03eec4e5f67353c1865840316b1a",
          ],
        },
      ],
    },
  });
});
