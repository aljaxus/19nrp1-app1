const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)


if (process.env.ENV === 'production') {
  app.use(express.static('dist'))
  server.listen(80)
} else if (process.env.ENV === 'development') {
  server.listen(81)
}

io.on('connection', function (socket) {
  console.log(`${socket.id} connected`)
  socket.on('leave', () => {
    console.log(`${socket.id} disconnected`)
  })
})