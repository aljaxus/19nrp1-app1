module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '/socket.io': {
          target: 'http://localhost:81/socket.io',
          secure: false,
          ws: true,
        },
      },
    },
  },
}
