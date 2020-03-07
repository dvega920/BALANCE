<template>
  <v-app>
    <v-container>
      <h1>Mental Health Questionnaire</h1>
      <h3>{{questions[0].text}}</h3>
      <div class="responseOptions"></div>
    </v-container>
  </v-app>
</template>  

    <script>
export default {
  data() {
    return {
      questions: [
        {
          text: "Do you experience little interest in pleasure in doing things?"
        },
        { text: "Are you feeling down, depressed, or hopeless?" },
        { text: "Trouble falling or staying asleep, or sleeping too much?" },
        { text: "Feeling tired or having little energy?" },
        { text: "Poor appetite or overeating?" },
        {
          text:
            "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?"
        },
        {
          text:
            "Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?"
        },
        {
          text:
            "Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?"
        }
      ],
      responses: [
        { text: "Not At All", value: "1" },
        { text: "Some Days", value: "2" },
        { text: "More Than Half The Time", value: "3" },
        { text: "Most Of The Time", value: "4" }
      ]
    };
  }
};
</script>