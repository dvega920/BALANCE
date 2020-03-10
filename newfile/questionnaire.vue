

<template>
  <v-container fluid>
    <p>{{ radios || 'null' }}</p>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="Radio 1" value="radio-1"></v-radio>
      <v-radio label="Radio 2" value="radio-2"></v-radio>
    </v-radio-group>
  </v-container>
</template>

<script>
import questions from '@/data/questions.json';

export default {

name: Questionnaire ({
  el: '#app',
  data: {
    questions: questions,
    // Store current question index
    questionIndex: 0,
    userResponses: Array(questions.length).fill(false)
  },
  // The view will trigger these methods on click
  methods: {
    // Go to next question
    next: function() {
      this.questionIndex++;
    },
    // Go to previous question
    prev: function() {
      this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function() {
      return this.userResponses.filter(function(val) { return val }).length;
    }
  }
})
}
</script>

<style>
</style>