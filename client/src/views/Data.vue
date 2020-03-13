<template>
  <v-container>
    <v-layout>
      <v-flex justify-center>
        <v-container fluid>
          <Data />
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Data from "../components/myData";
// @ is an alias to /src
export default {
  name: "App",
  components: {
    Data
  }
};
</script>