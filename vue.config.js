module.exports = {
    devServer: {
      host: "localhost",
      port: 8081, // 端口号
      https: false, // https:{type:Boolean}
      open: true, //配置自动启动浏览器
      // 配置多个代理
      proxy: {
        "/douban": {
          target: "https://goblin.hupu.com/pc",// 要访问的接口域名
          ws: true,// 是否启用websockets
          changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
          pathRewrite: {
              '^/douban': '' //这里理解成用'/douban'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
            }
        }
      },
    }
  };
  