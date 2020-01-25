<template>
    <div class="signup">
      <v-container>
        <v-row justify="end">
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-form @submit.prevent="signup" color="#fff">
            <v-card class="elevation-12">
              <v-toolbar
                color="#EA2027"
                flat
              >
                <v-toolbar-title>Sign Up </v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              
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
            </v-card>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'


export default {
    name: 'Signup',

    data() {
        return {
            email: null,
            password: null,
            alias: null,
            slug: null,
            feedback: true,
        }
    },
    methods: {
        signup() {
            if(this.alias && this.email && this.password) {
                this.slug = slugify(this.alias, {
                replacement: '-',
                remove: /[$*_+~.()'"!\-:@]/g,
                lower: true
                })
                let ref = db.collection('users').doc(this.slug)
                ref.get().then(doc => {
                    if(doc.exists) {
                        this.feedback = 'This alias already exists'
                    }else {
                        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                          .then(cred => {
                            ref.set({
                              alias: this.alias,
                              user_id: cred.user.uid
                            })
                          }).then(() => {
                            this.$router.push({ name: 'Dashboard' })
                          })
                          .catch(err => {
                            this.feedback = err.message
                          });
                        this.feedback = 'This alias is free to use'
                    }
                })
            }else {
                this.feedback = 'You must enter all fields'
            }
        }
    }
}
</script>

<style>

</style>


