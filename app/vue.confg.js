module.exports = {
  configureWebpack: {
    devServer: {
      watchOptions: {
        ignored: './socket.io.js',
      },
      proxy: {
        '/socketio': {
          target: 'http://localhost:81',
          secure: false,
          pathRewrite: { '^/socketio' : '' },
        },
      },
    },
  },
}
