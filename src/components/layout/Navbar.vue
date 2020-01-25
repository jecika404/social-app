<template>
    <v-toolbar flat color="transparent">
        <v-toolbar-title>
            <span style="color: #EA2027; font-size: 40px;">ART</span>
            <span style="color: #b51117; font-size: 25px;">istic</span>
        </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn tile text >
                <router-link :to="{ name: 'Login' }" tag="span">Log In</router-link>
            </v-btn>

            <!-- <v-btn @click="logout"  tile text>
                <span>Log Out</span>
            </v-btn> -->
        <div class="text-center">
            <v-dialog
            v-model="dialog"
            width="500"
            >
                <template v-slot:activator="{ on }">
                    <v-btn dark class="white--text" color="#EA2027" v-on="on">
                            Sign up
                    </v-btn>
                </template>
            <v-card>
            <v-toolbar
                color="#EA2027"
                flat>
                <v-toolbar-title>Sign Up </v-toolbar-title>
                <v-spacer />
            </v-toolbar>
            <v-divider></v-divider>
                <v-form @submit.prevent="signup" color="#fff">
                <v-card-text>
                    <v-text-field
                        v-model="email"
                        label="Enter Email"
                        name="email"
                        type="text"
                        id="email"
                    />
                    <v-text-field
                    v-model="password"
                        id="password"
                        label="Enter Password"
                        name="password"
                        type="password"
                    />
                    <v-text-field
                        v-model="alias"
                        id="alias"
                        label="Enter Alias"
                        name="alias"
                        type="text"
                        :rules="[feedback]"
        
                    />  
                    </v-card-text>
                    <!-- <v-alert type="info" v-if="feedback">{{ feedback }}</v-alert> -->
                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="#EA2027" type="submit">Sign Up</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
      
        </v-dialog>
    </div>
</v-toolbar>
        
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'Navbar',
    data() {
        return {
   
        }
    },
    methods: {
        logout() {
            firebase.auth().signOut().then(() => {
                this.$router.push({ name: 'Login' })
            })
        }
    }
}
</script>

<style>

</style>