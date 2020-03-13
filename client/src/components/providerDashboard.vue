<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-subheader>
          <div class="headline">My Dashboard - Dr. {{firstname}} {{lastname}}</div>
        </v-subheader>
      </v-row>
      <v-row dense>
        <v-col cols="6">
          <v-card height="100%" width="750px" color="#3f51b5" dark hover ripple to>
            <v-card-media class="pa-0 pb-3"></v-card-media>
            <v-card-title class="pt-0">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline font-weight-bold mb-4">???</div>
                  <v-list-item-title class="headline mb-1">???</v-list-item-title>
                  <v-list-item-subtitle>???</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar tile size="80">
                  <v-icon size="80px" light>mdi-clipboard-text-outline</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card height="100%" width="750px" color="#3fb584" dark hover ripple to="/providerData">
            <v-card-media class="pa-0 pb-3"></v-card-media>
            <v-card-title class="pt-0">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline font-weight-bold mb-4">PROVIDER DATA</div>
                  <v-list-item-title class="headline mb-1">DATA</v-list-item-title>
                  <v-list-item-subtitle>COLLECTED PATIENT DATA</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar tile size="80">
                  <v-icon size="80px" light>mdi-chart-bar</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card height="100%" width="750px" color="#b53f74" dark hover ripple to="/patients">
            <v-card-media class="pa-0 pb-3"></v-card-media>
            <v-card-title class="pt-0">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline font-weight-bold mb-4">LIST OF PATIENTS</div>
                  <v-list-item-title class="headline mb-1">PATIENTS</v-list-item-title>
                  <v-list-item-subtitle>???</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar tile size="80">
                  <v-icon size="80px" light>mdi-account-group</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card
            height="100%"
            width="750px"
            color="#b0813c"
            dark
            hover
            ripple
            to="/providerProfile"
          >
            <v-card-media class="pa-0 pb-3"></v-card-media>
            <v-card-title class="pt-0">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline font-weight-bold mb-4">My Account</div>
                  <v-list-item-title class="headline mb-1">Provider Profile</v-list-item-title>
                  <v-list-item-subtitle>View or edit your profile here.</v-list-item-subtitle>
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