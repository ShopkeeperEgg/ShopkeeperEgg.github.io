module.exports = {
  lintOnSave: true,
  compiler: true,
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true
    // proxy: {
    //   '/api': {
    //     target: process.env.BASE_URL,
    //     router: function(req) {
    //       if (+req.query.mock === 1) {
    //         return process.env.MOCK_URL;
    //       }
    //     },
    //     changeOrigin: true
    //   }
    // }
  }
};
