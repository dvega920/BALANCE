<template>
  <v-app>
    <v-content>
      <h1 class="title">Mental Health Questionnaire</h1>

      <v-container>
        <div>
          <b-form v-for="(question, i) in questions" :key="i" label="Questions" i>
            <h5>{{i+1}}. {{questions[i].text}}</h5>

            <b-form-radio
              v-for="(response, j) in responses"
              :key="j"
              v-model="selected"
              name="radios"
              :value="responses[j].value"
              label="Responses"
            >{{responses[j].value}}</b-form-radio>

            <div class="mt-3">
              Score:
              <strong>{{selected}}</strong>
            </div>
            <br />
          </b-form>
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
        { text: "Not At All", value: 1 },
        { text: "Some Days", value: 2 },
        { text: "More Than Half The Time", value: 3 },
        { text: "Most Of The Time", value: 4 }
      ],
      selected: 0
    };
  }
};
</script>