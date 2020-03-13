


















<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <Login />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Login from "../components/loginForm";

export default {
  name: "App",
  components: {
    Login
  },

  data: () => ({
    drawer: null
  })
};
</script>


