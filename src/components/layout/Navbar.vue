<template>
    <v-card
        color="grey lighten-4"
        flat
        tile
    >
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Location</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn>
          <span>Sign Up</span>
      </v-btn>

      <v-btn>
         <span>Log In</span>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {

        }
    }
}
</script>

<style>

</style>