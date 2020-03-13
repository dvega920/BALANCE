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
              <!-- <v-flex xs12 md6>
                <v-text-field label="First Name" class="purple-input" />
              </v-flex>-->
              <!-- <v-flex xs12 md6>
                <v-text-field label="Last Name" class="purple-input" />
              </v-flex>-->
              <!-- <v-flex xs12 md12>
                <v-text-field label="Address" class="purple-input" readonly="yes" />
              </v-flex>-->
              <!-- <v-flex xs12 md4>
                <v-text-field label="City" class="purple-input" />
              </v-flex>-->
              <!-- <v-flex xs12 md4>
                <v-text-field label="State" class="purple-input" />
              </v-flex>-->
              <!-- <v-flex xs12 md4>
                <v-text-field class="purple-input" label="Postal Code" type="number" />
              </v-flex>-->
              <p class="card-description font-weight-light">Your Patients:</p>

              <ul>
                <div v-for="(patient, i) in patients" :key="i">
                  <!-- <p>{{patient.patient_name}}</p> -->

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
      <!-- <v-flex xs12 md4>
        <v-card class="pa-4" height="400px" outlined>
          <material-card class="v-card-profile">
            <v-avatar slot="offset" class="mx-auto d-block" size="130">
              <img src="https://capenetworks.com/static/images/testimonials/user-icon.svg" />
            </v-avatar>
            <v-card-text class="text-xs-center">
              <h6 class="category text-gray font-weight-thin mb-3">Sample Text</h6>
              <h4 class="card-title font-weight-light">John Doe</h4>
              <p
                class="card-description font-weight-light"
              >SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT</p>
            </v-card-text>
          </material-card>
        </v-card>
      </v-flex>-->
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