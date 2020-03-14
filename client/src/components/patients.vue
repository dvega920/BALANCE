<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <v-card height="400px">
          <v-toolbar color="indigo" dark>
            <v-toolbar-title>Dr. {{firstname}} {{lastname}}'s Patient Profile</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-container>
            <v-layout wrap>
              <p class="card-description font-weight-light">Your Patients:</p>

              <ul>
                <div v-for="(patient, i) in patients" :key="i">
                  <ol>{{patient.patient_name}} | {{patient.age}} | {{patient.patient_email}}</ol>
                </div>
              </ul>

              <v-flex xs12 text-xs-right>
                <v-btn class="mx-0" text medium color="#3f51b5">Edit Profile</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
        <v-spacer />
        <v-row>
          <v-col xs="12">
            <v-btn class="mx-3 my-2 font-weight-light" to="/Survey" dark color="#3f51b5">My Survey</v-btn>
            <v-btn class="mx-3 my-2 font-weight-light" to="/Data" dark color="#3fb584">My Data</v-btn>
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