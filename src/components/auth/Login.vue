<template>
    <div class="log">
        <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-form @submit.prevent="login" >
            <v-card class="elevation-12">
              <v-toolbar
                color="success"
                dark
                flat
              >
                <v-toolbar-title>Log In</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              
              <v-card-text>
               
                  <v-text-field
                    v-model="email"
                    label="Enter Email"
                    name="email"
                    type="text"
                    id="email"
                   :rules="[feedback]"
                  />

                  <v-text-field
                  v-model="password"
                    id="password"
                    label="Enter Password"
                    name="password"
                    type="password"
                    :rules="[feedback]"
                  />
                  </v-card-text>
                <v-card-actions >
                    <v-spacer />
                    <v-btn color="primary" type="submit">Log In</v-btn>
                </v-card-actions>
            </v-card>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>

import firebase from 'firebase'
export default {
    name: 'Login',
    data() {
        return {
            email: null,
            password: null,
            feedback: true
        }
    },
    methods: {
        login() {
            if(this.email && this.password) {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then(() => {
                        // console.log(cred.user)
                        this.$router.push({ name: 'Dashboard' })
                    }).catch(err => {
                        this.feedback = err.message
                    })
                this.feedback = null

            }else {
                this.feedback = 'Fill in both fields'
            }
        }
    }
}
</script>

<style>

</style>