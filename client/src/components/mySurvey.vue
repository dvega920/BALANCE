<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-subheader>
          <div class="headline">My Survey</div>
        </v-subheader>
      </v-row>

      <v-card class="mx-auto" color="#3f51b5" dark width="900px%">
        <v-card-text>
          <v-sheet color="rgba(0, 0, 0, .12)"></v-sheet>
        </v-card-text>

        <v-card-text>
          <div class="display-1 font-weight-thin text-center">My Survey</div>
        </v-card-text>

        <!-- Renders the survey -->
        <Questionnaire />

        <v-divider></v-divider>

        <v-card-actions class="justify-center">
          <v-btn block text to="/">Back to Dashboard</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Questionnaire from "../components/Questionnaire.vue";
export default {
  // name: "App",
  components: {
    Questionnaire
  }
};
</script>