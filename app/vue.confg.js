module.exports = {
  configureWebpack: {
    devServer: {
      watchOptions: {
        ignored: './socket.io.js',
      },
    },
  },
}
