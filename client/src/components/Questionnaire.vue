<template>
  <div>
    <b-form-group label="Plain inline checkboxes">
      <b-form-checkbox-group
        v-model="selected"
        :options="responses"
        plain
      ></b-form-checkbox-group>
    </b-form-group>
  </template>  

    <script>
  import questions from './data/questions.json';

  export default {
    data() {
      return {
        selected: [
          
        ],
        responses: [
          { text: 'Not At All', value: '1' },
          { text: 'Some Days', value: '2' },
          { text: 'More Than Half The Time', value: '3' },
          { text: 'Most Of The Time', value: '4' }
        ]
      }
    }
  }
</script>