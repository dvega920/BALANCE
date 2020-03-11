<template>
  <v-container>
    <v-layout>
      <v-flex justify-center>
        <v-container fluid>
          <mySurvey />
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import mySurvey from "../components/mySurvey";
// @ is an alias to /src

export default {
  name: "App",
  components: {
    mySurvey
  }
};
</script>
