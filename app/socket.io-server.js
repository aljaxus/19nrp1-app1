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
const util = {
  createId (length = 15) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },
  getGameRooms () {
    const rooms = io.sockets.adapter.rooms
    const games = Object.keys(rooms)
      .filter(key => !!rooms[key].isgame === true)
      .map(key => {
        const el = rooms[key]
        return {
          id: key,
          sockets: el.sockets.length,
        }
      })
    return games
  },
}

io.on('connection', function (socket) {
  console.log(`[+] ${socket.id} connected`)
  socket.emit('allgames', util.getGameRooms())

  socket.on('joinnewgame', () => {
    const gameid = 'game-' + util.createId(15)
    while (socket.rooms[gameid]) gameid = 'game-' + util.createId(15)
    socket.leaveAll()
    socket.join(gameid)
    socket.adapter.rooms[gameid].isgame = true
    io.emit('allgames', util.getGameRooms())
    socket.emit('routeto', { name: 'game', params: { gameid } })
  })

  socket.on('joingame', gameid => {

    socket.join(gameid)
    socket.emit('routeto', { name: 'game', params: { gameid } })
  })

  socket.on('disconnect', () => {
    console.log(`[-] ${socket.id} disconnected`)
  })
})