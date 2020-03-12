<template>
  <v-container>
    <v-layout>
      <v-flex justify-center>
        <v-container fluid>
          <!-- <SurveyResults /> -->
          <v-data-table :headers="headers" :questions="name" class="elevation-1"></v-data-table>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Mood Data",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "No Risk", value: "0-8" },
        { text: "Mild Risk", value: "8-16" },
        { text: "Moderate Risk", value: "16-24" },
        { text: "Severe Risk", value: "24-32" }
      ],
      questions: [
        {
          name: "Interest in Life",
          value: "8"
        },
        {
          name: "Down or Depressed",
          value: "16"
        },
        {
          name: "Trouble with Sleep",
          value: "2"
        },
        {
          name: "Tired or Little Energy",
          value: "16"
        },
        {
          name: "Poor Appetite or Overeating",
          value: "24"
        },
        {
          name: "Feeling Bad About Yourself",
          value: "2"
        },
        {
          name: "Moving or Speaking slowly",
          value: "5"
        },
        {
          name: "Suicidal Thoughts",
          value: "11"
        }
      ]
    };
  }
};
</script>
