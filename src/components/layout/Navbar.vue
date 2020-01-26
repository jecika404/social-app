<template>
    <v-toolbar flat color="transparent">
        <v-toolbar-title>
            <span style="color: #EA2027; font-size: 40px;">ART</span>
            <span style="color: #b51117; font-size: 25px;">istic</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- LOG IN MODAL -->
        <div class="text-center">
        <v-dialog
        v-model="loginDialog"
        width="500"
        >
        <template v-slot:activator="{ on }">
            <v-btn color="primary" text v-on="on">
                    Log In
            </v-btn>
        </template>
        <v-card>
            <v-toolbar
                color="primary"
                flat>
                <v-toolbar-title><span class="white--text">Log In</span></v-toolbar-title>
                <v-spacer />
            </v-toolbar>
            <v-divider></v-divider>
            <v-form @submit.prevent="login" color="white">
            <v-card-text>
                <v-text-field
                    v-model="email"
                    label="Enter Email"
                    name="email"
                    type="text"
                    prepend-icon="email"
                    id="email"
                    :counter="30"
                    :rules="[required('E-mail'), minLength('E-mail', 5), maxLength('E-mail', 30), emailRule('E-mail', 'valid')]"
                />
                <v-text-field
                v-model="password"
                    id="password"
                    label="Enter Password"
                    name="password"
                    type="password"
                    prepend-icon="lock"
                    :counter="30"
                    :rules="[required('Password'), minLength('Password', 5), maxLength('Password', 30), feedback]"
                />  
                </v-card-text>
                <v-card-actions>   
                    <v-spacer />
                    <v-btn color="primary" type="submit">Log In</v-btn>
                </v-card-actions>
            </v-form>
            </v-card>
    </v-dialog>
    </div>
        <!-- SIGN UP MODAL -->
        <div class="text-center">
            <v-dialog
            v-model="signupDialog"
            width="500"
            >
            <template v-slot:activator="{ on }">
                <v-btn dark color="primary" v-on="on">
                        Sign up
                </v-btn>
            </template>
            <v-card>
            <v-toolbar
                color="primary"
                flat>
                <v-toolbar-title><span class="white--text">Sign Up</span></v-toolbar-title>
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
                        prepend-icon="email"
                        :counter="30"
                        :rules="[required('E-mail'), minLength('E-mail', 5), maxLength('E-mail', 30), emailRule('E-mail', 'valid')]"
                    />
                    <v-text-field
                    v-model="password"
                        id="password"
                        label="Enter Password"
                        name="password"
                        type="password"
                        prepend-icon="lock"
                        :counter="30"
                        :rules="[required('Password'), minLength('Password', 5), maxLength('Password', 30)]"
                    />
                    <v-text-field
                        v-model="alias"
                        id="alias"
                        prepend-icon="person"
                        label="Enter Username"
                        name="alias"
                        type="text"
                        :counter="15"
                        :rules="[required('Alias'), feedback]"
                    />  
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="primary" dark type="submit">Sign Up</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
      
        </v-dialog>
    </div>
</v-toolbar>
     
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
    name: 'Navbar',
    data() {
        return {
            signupDialog: false,
            loginDialog: false,
            email: null,
            password: null,
            alias: null,
            slug: null,
            feedback: true,
            required(propertyType){
                return v => v && v.length > 0 || `${propertyType} is reqiured.`
            },
            minLength(propertyType, minLength) {
                return v => v && v.length >= minLength || `${propertyType} must be at least ${minLength} characters.`
            },
            maxLength(propertyType, maxLength) {
                return v => v && v.length <= maxLength || `${propertyType} must be less than ${maxLength} characters.`
            },
            emailRule(propertyType, emailRule) {
                return v => /.+@.+\..+/.test(v) || `${propertyType} must be ${emailRule}.`
            },

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
            }
        },
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