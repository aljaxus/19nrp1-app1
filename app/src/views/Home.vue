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
                :color="item.color"
                :key="i"
                :to="{ name: 'game', params: { gameid: item.id } }"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.id }} - {{ item.msg }}
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

export default {
  name: 'Home',
  computed: {
    ...mapGetters([ 'allgames' ]),
    games () {
      return this.allgames.map(el => {
        let icon = ''
        let color = ''
        let msg = ''
        if (el.state === 'waiting') { icon = 'mdi-clock-outline'; color = 'info--text'; msg = 'In waiting lobby' }
        if (el.state === 'starting') { icon = 'mdi-alert'; color = 'warning--text'; msg = 'Game is starting' }
        if (el.state === 'ingame') { icon = 'mdi-account-group'; color = 'warning--text'; msg = 'Game is running' }
        if (el.state === 'ending') { icon = 'mdi-stop-circle-outline'; color = 'error--text'; msg = 'Game is ending' }
        return {
          ...el,
          msg,
          icon,
          color,
        }
      })
    }
  },
}
</script>
