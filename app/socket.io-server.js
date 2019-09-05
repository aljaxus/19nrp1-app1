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
 *   players: [
 *     SocketID
 *   ],
 *   state: 'waiting', 'starting', 'ingame', 'ending'
 * }
 */
// eslint-disable-next-line prefer-const
let games = [
  {
    id: 'random',
    players: [
      'playerid1',
      'playerid2',
    ],
    state: 'waiting',
  },
]

io.on('connection', function (socket) {
  console.log(`[+] ${socket.id} connected`)
  socket.emit('allgames', games.map(el => {
    return {
      id: el.id,
      playercount: el.players.length,
      state: el.state,
    }
  }))

  socket.on('joingame', gameid => {
    if (games.some(el => el.id === gameid && el.state === 'waiting')) {
      const index = games.findIndex(el => el.id === gameid)
      if (games[index].players.includes(socket.io)) return
      games[index].players.push(socket.id)
    }
  })

  socket.on('disconnect', () => {
    console.log(`[-] ${socket.id} disconnected`)
  })
})