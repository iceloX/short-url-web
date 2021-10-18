module.exports = {
  // 基本路径
  publicPath: "/",

  // 输出文件目录
  outputDir: "dist",

  // 服务器配置
  devServer: {
    port: 18881,
    proxy: {
      "/api": {
        target: "http://localhost:18880",
        changOrigin: true, //允许跨域
        secure: false, // 如果是https接口，需要配置这个参数
        ws: true, //如果要代理 websockets，配置这个参数
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
