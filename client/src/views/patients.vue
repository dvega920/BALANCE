<template>
  <v-container>
    <v-layout>
      <v-flex xs12 justify-center>
        <v-container fluid>
          <v-row>
            <patients />
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import patients from "../components/patients";
// @ is an alias to /src

export default {
  name: "App",
  components: {
    patients
  }
};
</script>
