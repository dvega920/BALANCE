<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-subheader>
          <div class="headline">Provider's Data</div>
        </v-subheader>
      </v-row>

      <v-card class="mx-auto text-center" color="#3fb584" dark width="900px%">
        <v-card-text>
          <v-sheet color="rgba(0, 0, 0, .12)">
            <v-sparkline :labels="labels" :value="value" color="white" line-width="1" padding="16"></v-sparkline>
          </v-sheet>
        </v-card-text>

        <v-card-text>
          <div class="display-1 font-weight-thin">My Mental Health Tracker</div>
        </v-card-text>

        <v-divider></v-divider>
        <SurveyResults />
        <v-card-actions class="justify-center">
          <v-btn block text to="/pDash">Back to Dashboard</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import SurveyResults from "./SurveyResults.vue";
export default {
  data: () => ({
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUNE",
      "JULY",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC"
    ],
    value: [100, 120, 200, 250, 300, 340, 380, 400, 410, 300, 280, 280]
  }),
  props: {
    source: String
  },
  components: {
    SurveyResults
  }
};
</script>