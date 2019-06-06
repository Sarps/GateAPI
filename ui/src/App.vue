<template>
  <v-app>
    <v-toolbar app color="accent">
      <v-toolbar-side-icon v-if="$vuetify.breakpoint.smAndDown"></v-toolbar-side-icon>
      <v-toolbar-title class="headline">
        <span>GateAPI</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>
        <span class="mr-2">Logout</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <v-navigation-drawer app class="primary" clipped dark>

    </v-navigation-drawer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  *:not(.material-icons) {
    font-family: Quicksand !important;
  }
</style>
