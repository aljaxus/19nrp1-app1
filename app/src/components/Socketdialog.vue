<template>
  <v-dialog
    :value="$socket.disconnected"
    persistent
    no-click-animation
    width="600"
  >
    <v-card color="error" dark>
      <v-progress-linear
        indeterminate
        color="white"
        class="mb-0"
      />
      <v-card-title 
        primary-title
        class="py-3"
        v-text="'Disconnected from the socket server! Reconnecting ...'"
      />
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'Socketdialog',
}
</script>