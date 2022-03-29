const path = require("path");
const fs = require("fs");

let devServer = {
  proxy: {
    // 代理
    "/": {
      target: "http://localhost:4000", //设置你调用的接口域名和端口号 别忘了加http
      ws: false,
      changeOrigin: true, // needed for virtual hosted sites
      pathRewrite: {},
    },
  },
};

module.exports = {
  devServer: devServer,
  // 输出文件目录
  assetsDir: "static",
  css: {
    loaderOptions: {
      scss: {
        prependData: `
			@import "@/common/styles/variables.scss";
		  `,
      },
    },
  },
  // 扩展 webpack 配置
  chainWebpack: (config) => {
    // @ 默认指向 src 目录，这里要改成 examples
    // 另外也可以新增一个 ~ 指向 packages
    config.resolve.alias
      .set("@", path.resolve("src"))
      .set("@src", path.resolve("src"))
      .set("@plugins", path.resolve("plugins"));
  },
};
