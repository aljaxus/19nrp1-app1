<template>
  <v-card>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12 md4 lg3 xl2>
          <v-list
            rounded
            dense
          >
            <v-subheader>Current games</v-subheader>
            <v-list-item-group>
              <v-list-item
                v-for="(item, i) in games"
                :disabled="item.state !== 'waiting'"
                :class="`${item.color} lighten-5`"
                :key="i"
                :to="{ name: 'game', params: { gameid: item.id } }"
              >
                <v-list-item-content>
                  <v-list-item-title :class="`${item.color}--text`">
                    <v-icon v-text="item.icon" :class="`${item.color}--text mr-1`" />
                    {{ item.id }} - {{ item.msg }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="joinNewGame()">
                <v-list-item-content>
                  <v-list-item-title class="success--text">
                    <v-icon v-text="'mdi-plus'" class="success--text" />
                    Create new game
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapGetters } from 'vuex'
import socket from '../plugins/socket.io'

export default {
  name: 'Home',
  computed: {
    ...mapGetters([ 'allgames' ]),
    games () {
      return this.allgames.map(el => {
        let icon = ''
        let color = ''
        let msg = ''
        if (el.state === 'waiting') { icon = 'mdi-clock-outline'; color = 'success'; msg = 'In waiting lobby' }
        if (el.state === 'starting') { icon = 'mdi-alert'; color = 'warning'; msg = 'Game is starting' }
        if (el.state === 'ingame') { icon = 'mdi-account-group'; color = 'info'; msg = 'Game is running' }
        if (el.state === 'ending') { icon = 'mdi-stop-circle-outline'; color = 'error'; msg = 'Game is ending' }
        return {
          ...el,
          msg,
          icon,
          color,
        }
      })
    }
  },
  mounted: () => socket.io.emit('getallgames'),
  methods: {
    joinNewGame: () => socket.io.emit('joinnewgame')
  }
}
</script>
