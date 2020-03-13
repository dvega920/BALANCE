<template>
  <v-container>
    <v-layout>
      <v-flex justify-center>
        <v-container fluid>
          <v-data-table
            :headers="headers"
            :items="questions"
            :questions-per-page="5"
            class="elevation-1"
          ></v-data-table>
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
        { text: "No Risk (%)", value: "norisk" },
        { text: "Mild Risk (%)", value: "mildrisk" },
        { text: "Moderate Risk (%)", value: "modrisk" },
        { text: "Severe Risk (%)", value: "sevrisk" }
      ],
      questions: [
        {
          name: "Interest in Life",
          norisk: 0,
          mildrisk: 80,
          modrisk: 10,
          sevrisk: 10
        },
        {
          name: "Down or Depressed",
          norisk: 5,
          mildrisk: 15,
          modrisk: 50,
          sevrisk: 30
        },
        {
          name: "Trouble with Sleep",
          norisk: 40,
          mildrisk: 22,
          modrisk: 18,
          sevrisk: 20
        },
        {
          name: "Tired or Little Energy",
          norisk: 0,
          mildrisk: 85,
          modrisk: 10,
          sevrisk: 5
        },
        {
          name: "Poor Appetite or Overeating",
          norisk: 0,
          mildrisk: 0,
          modrisk: 85,
          sevrisk: 15
        },
        {
          name: "Feeling Bad About Yourself",
          norisk: 0,
          mildrisk: 25,
          modrisk: 57,
          sevrisk: 18
        },
        {
          name: "Moving or Speaking slowly",
          norisk: 90,
          mildrisk: 0,
          modrisk: 10,
          sevrisk: 0
        },
        {
          name: "Suicidal Thoughts",
          norisk: 0,
          mildrisk: 0,
          modrisk: 86,
          sevrisk: 14
        }
      ]
    };
  }
};
</script>
