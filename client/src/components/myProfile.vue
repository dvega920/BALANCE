<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md4>
        <v-card class="pa-4" height="400px" outlined>
          <material-card class="v-card-profile">
            <v-avatar slot="offset" class="mx-auto d-block" size="130">
              <img src="../assets/jappleseedprofilepic.jpeg" />
            </v-avatar>
            <v-card-text class="text-xs-center">
              <h6 class="category text-gray font-weight-thin mb-3">Balance</h6>
              <h4 class="card-title font-weight-light">Welcome! {{patient_name}}</h4>
              <p class="card-description font-weight-light">Age: {{age}}</p>
              <p class="card-description font-weight-light">Email: {{patient_email}}</p>
              <p class="card-description font-weight-light">Your Physician:</p>

              <!-- <div v-for="(physician, i) in physician" :key="i"> -->
              <!-- <p>{{patient.patient_name}}</p> -->
              <!-- <ul> -->
              <p>Dr. {{physician.firstName}} {{physician.lastName}}</p>
              <!-- </ul> -->
              <!-- </div> -->
            </v-card-text>
          </material-card>
        </v-card>
        <v-btn class="mt-3" dark color="#3f51b5" block to="/Home">Back to Dashboard</v-btn>
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
      patient_name: null,
      age: null,
      patient_email: null,
      physician: null
    };
  },
  mounted() {
    axios.get("/api/patients/1").then(response => {
      this.patient_name = response.data.patient_name;
      this.age = response.data.age;
      this.patient_email = response.data.patient_email;
      this.physician = response.data.Physician;
    });
  }
};
</script>