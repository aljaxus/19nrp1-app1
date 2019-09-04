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

/**
 * * Start game logic
 */

/**
 * {
 *   id: SocketRoomID,
 *   players: {
 *     id: SocketID
 *   },
 *   state: 'waiting', 'starting', 'ingame', 'ending'
 * }
 */
// eslint-disable-next-line prefer-const
let games = []

io.on('connection', function (socket) {
  console.log(`[+] ${socket.id} connected`)
  socket.emit('allgames', games.map(el => {
    return {
      id: el.id,
      playercount: el.players.length,
      state: el.state,
    }
  }))

  socket.on('joingame', msg => {
    // if (
    //   games.some(el => el.id === 'msg.gameid').length > 0 &&
    // ) {
    // }
  })

  socket.on('disconnect', () => {
    console.log(`[-] ${socket.id} disconnected`)
  })
})