<template>
  <v-container>
    <v-layout>
      <v-flex xs12 justify-center>
         <v-container fluid>
    <v-row>
      <providerProfile />
    </v-row>
  </v-container> 
    
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import providerProfile from "../components/providerProfile";
// @ is an alias to /src

export default {
  name: "App",
  components: {
    providerProfile
  
  }
}
</script>
