<template>
    <div class="dashboard">
        <v-toolbar danse tile flat light>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
            <v-btn @click="logout"  tile text>
                <span>Log Out</span>
            </v-btn>
        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        </v-toolbar>
        <h1 align="center" class="mt-5">DASHBOARD</h1>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Dashboard',
    data() {
        return {
          
        }
    },
    methods: {
        logout() {
            firebase.auth().signOut().then(() => {
                this.$router.push({ name: 'Welcome' })
            })
        },
    },
    mounted() {
        // console.log(firebase.auth().currentUser)
    }

}
</script>

<style>

</style>