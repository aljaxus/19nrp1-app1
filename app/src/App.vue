<template>
  <v-app>
    <Appbar />
    <Socketdialog />

    <v-content>
      <v-container grid-list-xs>
        <transition name="fade" mode="out-in" appear>
          <router-view></router-view>
        </transition>
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
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s }
.fade-enter, .fade-leave-active { opacity: 0 }
</style>
