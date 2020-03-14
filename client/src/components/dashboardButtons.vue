<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-subheader>
          <div class="headline">My Dashboard - {{patient_name}}</div>
        </v-subheader>
      </v-row>
      <v-row dense>
        <v-col cols="6">
          <v-card height="100%" width="750px" color="#3f51b5" dark hover ripple to="/Survey">
            <v-card-media class="pa-0 pb-3"></v-card-media>
            <v-card-title class="pt-0">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline font-weight-bold mb-4">My Survey</div>
                  <v-list-item-title class="headline mb-1">Survey</v-list-item-title>
                  <v-list-item-subtitle>A short questionnaire.</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar tile size="80">
                  <v-icon size="80px" light>mdi-clipboard-text-outline</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card height="100%" width="750px" color="#3fb584" dark hover ripple to="/Data">
            <v-card-media class="pa-0 pb-3"></v-card-media>
            <v-card-title class="pt-0">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline font-weight-bold mb-4">My Data</div>
                  <v-list-item-title class="headline mb-1">Data</v-list-item-title>
                  <v-list-item-subtitle>Collection of your personalized data.</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar tile size="80">
                  <v-icon size="80px" light>mdi-chart-bar</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card height="100%" width="750px" color="#b53f74" dark hover ripple to="/Provider">
            <v-card-media class="pa-0 pb-3"></v-card-media>
            <v-card-title class="pt-0">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline font-weight-bold mb-4">Profile & Contact Information</div>
                  <v-list-item-title class="headline mb-1">My Provider</v-list-item-title>
                  <v-list-item-subtitle>
                    See your healthcare provider's
                    <br />profile & contact information.
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar tile size="80">
                  <v-icon size="80px" light>mdi-medical-bag</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card height="100%" width="750px" color="#b0813c" dark hover ripple to="/Profile">
            <v-card-media class="pa-0 pb-3"></v-card-media>
            <v-card-title class="pt-0">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline font-weight-bold mb-4">My Profile</div>
                  <v-list-item-title class="headline mb-1">User Account</v-list-item-title>
                  <v-list-item-subtitle>View your profile here.</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar tile size="80">
                  <v-icon size="80px" light>mdi-account</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
      physician: []
    };
  },
  mounted() {
    axios.get("/api/patients/1").then(response => {
      this.patient_name = response.data.patient_name;
      this.age = response.data.age;
      this.patient_email = response.data.patient_email;
      this.physician = response.data.physician;
    });
  }
};
</script>