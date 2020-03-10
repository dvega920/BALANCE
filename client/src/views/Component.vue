<template>
  <v-container>
    <v-layout>
      <v-flex justify-center>
         <v-container fluid>
       <myComponent />
    
  
  </v-container> 
    
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import myComponent from "../components/myComponent";
// @ is an alias to /src

export default {
  name: "App",
  components: {
    myComponent
  },
}
</script>
