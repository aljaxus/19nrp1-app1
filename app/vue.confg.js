module.exports = {
  configureWebpack: {
    devServer: {
      watchOptions: {
        ignored: './socket.io.js',
      },
      historyApiFallback: true,
      proxy: {
        '/socketio': {
          target: 'http://localhost:81',
          secure: false,
          pathRewrite: { '^/socketio' : '' },
          changeOrigin: true,
        },
      },
    },
  },
}
