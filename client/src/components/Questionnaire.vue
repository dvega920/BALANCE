<template>
<v-app>
  <v-content>
  <v-container>
  <div>
    <h1 class="title">Mental Health Questionnaire</h1>
    <b-form v-for="(question, i) in questions" :key="i" label="">
      <p>{{questions[i].text}}</p>
      <b-form-radio v-for="(response, j) in responses" :key="j" v-model="selected" name="some-radios" value="responses[j].text.value">{{responses[j].text}}</b-form-radio>
      <!-- <b-form-radio v-model="selected" name="some-radios" value="B">Option B</b-form-radio> -->
    
    <!-- still need to figure out how to grab the selected data and store it -->
    
    </b-form>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
  </v-container>
  </v-content>
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

<style>
.title{
  text-align: center;
  font-size: 20px;
}
</style>