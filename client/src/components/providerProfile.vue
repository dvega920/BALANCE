<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <v-card height="400px">
          <v-toolbar color="indigo" dark>
            <v-toolbar-title>Provider Profile</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-container>
            <v-layout wrap>
              <v-flex xs12 md4>
                <!-- <v-card class="pa-4" height="400px" outlined> -->
                <material-card class="v-card-profile">
                  <v-avatar slot="offset" class="mx-auto d-block" size="130">
                    <img src="../assets/mcdreamy.jpg" />
                  </v-avatar>
                  <v-card-text class="text-xs-center">
                    <h6 class="category text-gray font-weight-thin mb-3">Balance</h6>
                    <h4 class="card-title font-weight-light">Welcome! Dr. {{firstname}} {{lastname}}</h4>
                    <p class="card-description font-weight-light">Email: {{physician_email}}</p>
                    <p class="card-description font-weight-light">Phone: {{phone}}</p>
                    <!-- <p class="card-description font-weight-light">Your Patients:</p> -->
                    <div v-for="(patient, i) in patients" :key="i">
                      <!-- <p>{{patient.patient_name}}</p> -->
                      <ul>
                        <!-- <li>{{patient.patient_name}}</li> -->
                      </ul>
                    </div>
                  </v-card-text>
                </material-card>
                <!-- </v-card> -->
              </v-flex>
              <!-- End copy paste -->
            </v-layout>
          </v-container>
        </v-card>
        <v-spacer />

        <v-row>
          <v-col xs="12">
            <v-btn
              class="mx-3 my-2 font-weight-light"
              to="/pDash"
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