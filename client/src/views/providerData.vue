<template>
  <v-container>
    <v-layout>
      <v-flex justify-center>
        <v-container fluid>
          <providerData />
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import providerData from "../components/providerData";
// @ is an alias to /src

export default {
  name: "App",
  components: {
    providerData
  }
};
</script>
