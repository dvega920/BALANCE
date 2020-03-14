<template>
  <v-container>
    <v-layout>
      <v-flex justify-center>
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <v-img src="../assets/0313Asset5@2x.png" contain max-height="200px"></v-img>
            </v-col>
          </v-row>

          <pDash />
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import pDash from "../components/providerDashboard";
// @ is an alias to /src

export default {
  name: "App",
  components: {
    pDash
  }
};
</script>
