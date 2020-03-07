<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Patient Login form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Login" name="login" type="email" />

                  <v-text-field id="password" label="Password" name="password" type="password" />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import router from '../main.js'
import axios from 'axios'

export default {
  name: 'PatientLogin',
  methods: {
    login: (e)=>{
      e.preventDefault();
      let email='dvega920@gmail.com'
      let password='balance'
      let login = ()=>{
        let data = {
          email: email,
          password: password
        }
        axios.post('/api/login', data)
        .then((res) =>{
          console.log('Logged in')
          router.push('/dashboard')
        })
        .catch((err)=>{
          console.log('Cannot log in')
        })
      }
      login()
    }

  }
  // props: {
  //   source: String
  // }
};
</script>