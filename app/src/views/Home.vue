<template>
  <v-card>
    <v-card-text>
      <v-list rounded>
        <v-subheader>Current games</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in allgames"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.a" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.id" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
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
        if (el.state === 'waiting') { icon = 'mdi-clock-outline'; color = 'info' }
        if (el.state === 'starting') { icon = 'mdi-alert'; color = 'warning' }
        if (el.state === 'ingame') { icon = 'mdi-account-group'; color = 'warning' }
        if (el.state === 'ending') { icon = 'mdi-stop-circle-outline'; color = 'error' }
        return {
          ...el,
          icon,
          color,
        }
      })
    }
  },
}
</script>
