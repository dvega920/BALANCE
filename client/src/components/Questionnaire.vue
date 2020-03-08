<template>
  <div>
    <!-- Questions -->
    <b-form-group v-for="(question, i) in questions" :key="i">
      <h5>{{i+1}}. {{questions[i].text}}</h5>

      <!-- Radio Button Responses -->
      <b-form-radio-group
        id="radio-slots"
        v-model="selected"
        :options="options"
        name="radio-options-slots"
      >
        <template v-slot:first>
          <b-form-radio value="1">Not At All</b-form-radio>
        </template>

        <b-form-radio value="2">Some Days</b-form-radio>
        <b-form-radio value="3">More Than Half The Time</b-form-radio>
        <b-form-radio value="4">Most Of The Time</b-form-radio>
      </b-form-radio-group>
    </b-form-group>
    <h3>
      Scored:
      <strong>{{selected}}</strong>
    </h3>
  </div>
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
      selected: ""
      // options: [
      //   { text: "Toggle this custom radio", value: "first" },
      //   { text: "Or toggle this other custom radio", value: "second" },
      //   { text: "This one is Disabled", value: "3", disabled: true },
      //   { text: "This is the 4th radio", value: "4" }
      // ]
    };
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  color: red;
}
</style>>
