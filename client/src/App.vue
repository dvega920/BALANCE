<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" disable-resize-watcher="false" app>
      <v-list dense>
        <v-list-item to="/Home">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/Survey">
          <v-list-item-action>
            <v-icon>mdi-clipboard-text-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>My Survey</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/Data">
          <v-list-item-action>
            <v-icon>mdi-chart-bar</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>My Data</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/Provider">
          <v-list-item-action>
            <v-icon>mdi-medical-bag</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>My Provider</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/Profile">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>My Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/Contact">
          <v-list-item-action>
            <v-icon>mdi-mailbox-up</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title class="font-italic font-weight-light">
        B A L A N C E .
        <span>
          <div class="overline font-weight-bold">User Dashboard</div>
        </span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tooltip left color="indigo">
        <template v-slot:activator="{ on }">
          <v-btn icon dark v-on="on" to="/" class="mr-3">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </template>
        <span>Logout</span>
      </v-tooltip>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer color="indigo" app>
      <span class="white--text">Balance &copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  props: {
    source: String
  },
  data: () => ({
    drawer: false
  })
};
</script>



