module.exports = {
  devServer:{
    proxy: {
      '/api':{
        target:'http://127.0.0.1:7001'
      }
    }
    // https://www.douyu.com/ztCache/mobilegame/getHoverPromo
  },
  configureWebpack:require('./webpack.config')
}
