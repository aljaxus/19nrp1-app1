<template>
  <v-card>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12 md4 lg3 xl3>
          <v-list
            rounded
            dense
          >
            <v-subheader>Current games</v-subheader>
            <v-list-item-group>
              <v-list-item
                v-for="(item, i) in allgames"
                :disabled="item.state !== 'waiting'"
                :class="`${item.color} lighten-5`"
                :key="i"
                :to="{ name: 'game', params: { gameid: item.id } }"
              >
                <v-list-item-content>
                  <v-list-item-title :class="`${item.color}--text`">
                    <v-icon v-text="item.icon" :class="`${item.color}--text mr-1`" />
                    {{ item.id }} - {{ item.msg }} - Players: {{ item.sockets }}
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
  },
  mounted: () => {
    socket.io.emit('leaveall')
    socket.io.emit('getallgames')
  },
  methods: {
    joinNewGame: () => socket.io.emit('joinnewgame'),
  },
}
</script>
