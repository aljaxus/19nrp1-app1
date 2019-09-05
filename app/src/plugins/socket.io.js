import VueSocketIOExt from 'vue-socket.io-extended'
import io from 'socket.io-client'
import Vue from 'vue'
import Store from '../store'
import Router from '../router'

const socket = io()

Vue.use(VueSocketIOExt, socket)

export default {
  io: socket,
  connect: () => {
    console.log('[msg] Connected to the socket server!', socket)
  },
  allgames: games => {
    console.log('[msg] got allgames', games)
    Store.commit('SET_ALLGAMES', games)
  },
  routeto: to => Router.push(to),
  disconnect: reason => {
    console.log('[msg] Disconnected from the socket server! Reconnecting ...')
    if (reason === 'io server disconnect') {
      socket.connect();
    }
  },
}