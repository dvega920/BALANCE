<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <v-card height="400px">
          <v-toolbar color="#b53f74" class="mb-5" dark>
            <v-toolbar-title>Provider Profile</v-toolbar-title>
            <v-spacer />
          </v-toolbar>

          <v-layout wrap>
            <v-flex xs12 md4></v-flex>
            <v-flex xs12 md4>
              <material-card class="v-card-profile">
                <v-avatar slot="offset" class="mx-auto d-block" size="130">
                  <!-- <img src="https://capenetworks.com/static/images/testimonials/user-icon.svg" /> -->
                  <img src="../assets/mcdreamy.jpg" />
                </v-avatar>
                <v-card-text class="text-xs-center">
                  <h6 class="category text-gray font-weight-thin mb-3">Sample Text</h6>
                  <h4 class="card-title font-weight-light">Dr. {{firstname}} {{lastname}}</h4>
                  <p class="card-description font-weight-light">Contact Info:</p>
                  <p class="card-description font-weight-light">Email: {{physician_email}}</p>
                  <p class="card-description font-weight-light">Phone: {{phone}}</p>
                </v-card-text>
              </material-card>
            </v-flex>
          </v-layout>
        </v-card>
        <v-spacer />
        <v-row>
          <v-col xs="12">
            <v-btn class="mx-3 my-2 font-weight-light" to="/Contact" dark color="#b53f74">Contact</v-btn>
            <v-btn
              class="mx-3 my-2 font-weight-light"
              to="/Home"
              dark
              color="#3f51b5"
            >Back to Dashboard</v-btn>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  props: {
    source: String
  },
  data: function() {
    return {
      firstname: null,
      lastname: null,
      physician_email: null,
      patients: []
    };
  },
  mounted() {
    axios.get("/api/physicians/1").then(response => {
      this.firstname = response.data.firstName;
      this.lastname = response.data.lastName;
      this.physician_email = response.data.physician_email;
      this.phone = response.data.phone;
      this.patients = response.data.Patients;
    });
  }
};
</script>