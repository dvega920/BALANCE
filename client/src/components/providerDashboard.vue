<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-subheader>
          <div class="headline">My Dashboard</div>
        </v-subheader>
      </v-row>
      <v-row dense >
        <v-col cols="6">
          <v-card     
          height="100%" width="750px"
          color="#3f51b5" dark
          class="no-click"
          >
            <v-card-media class="pa-0 pb-3"></v-card-media>
            <v-card-title class="pt-0">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline font-weight-bold mb-4">B A L A N C E</div>
                  <v-list-item-title class="headline mb-1"> Hello Doctor. </v-list-item-title>
                  <v-list-item-subtitle></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar tile size="80">
                  <v-icon size="80px" light>mdi-clipboard-text-outline</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </v-card-title>
          </v-card>
        </v-col>
         <v-col cols="6">
            <v-card     
          height="100%" width="750px"
          color="#3fb584" dark
          hover ripple to="/providerData">
            <v-card-media class="pa-0 pb-3"></v-card-media>
            <v-card-title class="pt-0">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline font-weight-bold mb-4">Patient Data</div>
                  <v-list-item-title class="headline mb-1">My Data </v-list-item-title>
                  <v-list-item-subtitle>View my patient's data here.</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar tile size="80">
                  <v-icon size="80px" light>mdi-chart-bar</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </v-card-title>
          </v-card>
        </v-col>
         <v-col cols="6">
          <v-card     
          height="100%" width="750px"
          color="#b53f74" dark
          hover ripple to="/Patients">
            <v-card-media class="pa-0 pb-3"></v-card-media>
            <v-card-title class="pt-0">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline font-weight-bold mb-4">LIST OF PATIENTS</div>
                  <v-list-item-title class="headline mb-1">View Patients</v-list-item-title>
                  <v-list-item-subtitle> See your list of patients here. </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar tile size="80">
                  <v-icon size="80px" light> mdi-account-group </v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </v-card-title>
          </v-card>
        </v-col>
         <v-col cols="6">
          <v-card 
          height="100%" width="750px"
          color="#b0813c" dark
          hover ripple to="/providerProfile">
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
export default {
  props: {
    source: String
  }
};
</script>