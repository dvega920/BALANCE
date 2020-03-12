<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
         <Contact />
      </v-flex>
    </v-layout>
  </v-container>
</template>

// @ is an alias to /src

<script>
import Contact from "../components/contactForm";

export default {
  name: "App",

  components: {
    Contact
  },

  data: () => ({
    drawer: null
  })
};
</script>