<template>
  <v-container>
    <v-layout>
      <v-flex xs12 justify-center>
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <v-img
                class="home-image"
                src="../assets/0313Asset5@2x.png"
                contain
                max-height="250px"
              ></v-img>
            </v-col>
          </v-row>
          <v-row>
            <dashboardButtons />
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import dashboardButtons from "../components/dashboardButtons";
// @ is an alias to /src

export default {
  name: "App",
  components: {
    dashboardButtons
  }
};
</script>
<style>
</style>