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
          text: "Questions",
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
          name:
            "Do you experience little interest in pleasure in doing things?",
          norisk: 0,
          mildrisk: 80,
          modrisk: 10,
          sevrisk: 10
        },
        {
          name: "Are you feeling down, depressed, or hopeless?",
          norisk: 5,
          mildrisk: 15,
          modrisk: 50,
          sevrisk: 30
        },
        {
          name: "Trouble falling or staying asleep, or sleeping too much?",
          norisk: 40,
          mildrisk: 22,
          modrisk: 18,
          sevrisk: 20
        },
        {
          name: "Feeling tired or having little energy?",
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
          name:
            "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
          norisk: 0,
          mildrisk: 25,
          modrisk: 57,
          sevrisk: 18
        },
        {
          name:
            "Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?",
          norisk: 90,
          mildrisk: 0,
          modrisk: 10,
          sevrisk: 0
        },
        {
          name:
            "Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?",
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
