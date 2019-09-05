import VueSocketIOExt from 'vue-socket.io-extended'
import io from 'socket.io-client'
import Vue from 'vue'
import Store from '../store'

const socket = io()

Vue.use(VueSocketIOExt, socket)

export default {
  connect: () => {
    console.log('[msg] Connected to the socket server!', socket)
  },
  allgames: games => {
    console.log('[msg] got allgames', games)
    Store.commit('SET_ALLGAMES', games)
  },
  disconnect: reason => {
    console.log('[msg] Disconnected from the socket server! Reconnecting ...')
    if (reason === 'io server disconnect') {
      socket.connect();
    }
  },
}