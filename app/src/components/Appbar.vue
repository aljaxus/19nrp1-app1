<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>19NRP</span>
      <span class="font-weight-light">APP1</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      outlined
      href="https://github.com/aljaxus/19nrp1-app1"
      target="_blank"
    >
      <span class="mr-2">GitHub repo</span>
      <v-icon>mdi-github-box</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: 'Appbar',
}
</script>