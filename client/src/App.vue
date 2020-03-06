<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container>
          <router-view></router-view>
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/Patient">Patient</router-link>
            </li>
            <li>
              <router-link to="/Provider">Provider</router-link>
            </li>
          </ul>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>