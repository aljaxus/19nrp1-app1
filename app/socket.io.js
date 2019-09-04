const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)


if (process.env.ENV === 'production') {
  express.static('dist')
  server.listen(80)
} else if (process.env.ENV === 'development') {
  server.listen(81)
} else {
  console.error(`
  - START ERROR
  -
  - THE process.env.ENV is neither 'production' nor 'development' !
  -
  - END ERROR
  `)
}

io.on('connection', function (socket) {
  console.log(`${socket.id} connected`)
  socket.emit('news', { hello: 'world' })
  socket.on('my other event', function (data) {
    console.log(data)
  })
  socket.on('leave', () => {
    console.log(`${socket.id} disconnected`)
  })
})