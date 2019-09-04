<template>
  <v-app>
    <Appbar />
    <Socketdialog />

    <v-content>
      <v-container grid-list-xs>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Appbar from './components/Appbar'
import Socketdialog from './components/Socketdialog'

export default {
  name: 'App',
  components: { Appbar, Socketdialog },
}
</script>
<style>
@import './assets/main.css';
</style>