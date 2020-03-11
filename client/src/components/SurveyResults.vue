<template>
  <v-container>
    <v-layout>
      <v-flex justify-center>
        <v-container fluid>
          <SurveyResults />
          <v-data-table :headers="headers" :items="mood-data" class="elevation-1"></v-data-table>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  var (results = new Vue({
    data() {
      return {
        headers: [
          {
            text: "Mood Data",
            align: "start",
            sortable: false,
            value: "name"
          },
          { text: "0-8", value: "No Risk" },
          { text: "8-16", value: "Mild Risk" },
          { text: "16-24", value: "Moderate Risk" },
          { text: "24-32", value: "Severe Risk" }
        ],
        questions: [
          {
            name: "Interest in Life"
          },
          {
            name: "Down or Depressed"
          },
          {
            name: "Trouble with Sleep"
          },
          {
            name: "Tired or Little Energy"
          },
          {
            name: "Poor Appetite or Overeating"
          },
          {
            name: "Feeling Bad About Yourself"
          },
          {
            name: "Moving or Speaking slowly"
          },
          {
            name: "Suicidal Thoughts"
          }
        ]
      };
    },
  }))
}
</script>
