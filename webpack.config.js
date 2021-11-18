const WebpackBundleAnalyzer =require( "webpack-bundle-analyzer").BundleAnalyzerPlugin

if(process.env.NODE_ENV === "production"){
  module.exports = {
    plugins:[
      new WebpackBundleAnalyzer()
    ],
    externals: {
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
    }
  }
}else {
  module.exports = {}
}
