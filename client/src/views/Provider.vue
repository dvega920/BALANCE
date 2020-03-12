<template>
  <v-container>
    <v-layout>
      <v-flex justify-center>
         <v-container fluid>
       <myProvider />
    
  
  </v-container> 
    
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import myProvider from "../components/myProvider";
// @ is an alias to /src

export default {
  name: "App",
  components: {
    myProvider
  },
}
</script>
