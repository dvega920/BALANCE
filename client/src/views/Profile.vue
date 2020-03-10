<template>
  <v-container>
    <v-layout>
      <v-flex xs12 justify-center>
         <v-container fluid>
    <v-row>
      <myProfile />
    </v-row>
  </v-container> 
    
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import myProfile from "../components/myProfile";
// @ is an alias to /src

export default {
  name: "App",
  components: {
    myProfile
  
  }
}
</script>
