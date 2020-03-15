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
              <div>
                <p class="card-description font-weight-light">Your Patients:</p>
              </div>
              <div>
                <br />
                <div v-for="(patient, i) in patients" :key="i">
                  <ul>
                    <li>
                      <p>{{patient.patient_name}} | Age: {{patient.age}} | {{patient.patient_email}}</p>
                    </li>
                  </ul>
                </div>
              </div>

              <v-flex xs12 text-xs-right></v-flex>
            </v-layout>
          </v-container>
        </v-card>
        <v-spacer />
        <v-row>
          <v-col xs="12">
            <v-btn class="mx-3 my-2 font-weight-light" to="/Data" dark color="#3fb584">My Data</v-btn>
            <v-btn
              class="mx-3 my-2 font-weight-light"
              to="/pDash"
              dark
              color="#3f51b5"
            >Back To Dashboard</v-btn>
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