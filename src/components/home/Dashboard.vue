<template>
    <div class="dashboard">
        <div id="dashboard">Dashboard</div>
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

    },
    mounted() {
        console.log(firebase.auth().currentUser)
    }

}
</script>

<style>

</style>