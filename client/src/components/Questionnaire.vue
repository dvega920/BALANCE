<template>
  <v-app>
    <v-container>
      <h1 id="title">Mental Health Survey</h1>

      <v-content v-for="(question, i) in questions" :key="i">
        <p>{{i+1}}. {{ questions[i].text}}</p>

        <v-radio-group v-model="questions[i].answer" row>
          <v-radio label="Not At All" value="1"></v-radio>
          <v-radio label="Some Days" value="2"></v-radio>
          <v-radio label="More Than Half The Time" value="3"></v-radio>
          <v-radio label="Most Of The Time" value="4"></v-radio>
        </v-radio-group>

        <h5>Score: {{questions[i].answer}}</h5>
      </v-content>
      <br />
      <h1></h1>
      <div>
        <h2>Mental Health Score: {{totalScore}}</h2>
      </div>
      <div>
        <br />
        <h3 class="text-center">Mental Health Legend</h3>
        <p class="subtext text-center">
          (Your mental health score should
          <strong>NOT</strong> be construed as a dignosis but rather an indicator that professional services may be needed)
        </p>
        <v-row>
          <v-col>
            <v-card class="success" dark>
              <v-card-title class="justify-center">
                <p>0-8 (No Risk)</p>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="info" dark>
              <v-card-title class="justify-center">
                <p>8-16 (Mild Risk)</p>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="warning" dark>
              <v-card-title class="justify-center">
                <p>16-24 (Moderate Risk)</p>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="error" dark>
              <v-card-title class="justify-center">
                <p>24-32 (Severe Risk)</p>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      a: true,
      questions: [
        {
          text: "Do you experience little interest in pleasure in doing things?"
        },
        {
          text: "Are you feeling down, depressed, or hopeless?"
        },
        {
          text: "Trouble falling or staying asleep, or sleeping too much?"
        },
        {
          text: "Feeling tired or having little energy?"
        },
        {
          text: "Poor appetite or overeating?"
        },
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
      answers: {}
    };
  },
  computed: {
    totalScore: function() {
      return this.questions.reduce((total, question) => {
        if ("answer" in question) {
          return total + parseInt(question.answer);
        }
        return total;
      }, 0);
    }
  }
};
</script>

<style scoped>
#title {
  text-align: center;
}

.align {
  text-align: center;
}
</style>>
