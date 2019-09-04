import VueSocketIOExt from 'vue-socket.io-extended'
import io from 'socket.io-client'
import Vue from 'vue'

const socket = io()

Vue.use(VueSocketIOExt, socket)

export default {
  connect: () => {
    console.log('[msg] Connected to the socket server!', socket)
  },
  disconnect: reason => {
    console.log('[msg] Disconnected from the socket server! Reconnecting ...')
    if (reason === 'io server disconnect') {
      socket.connect();
    }
  },
}