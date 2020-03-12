<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <v-card height="400px">
          <v-toolbar color="#b53f74" class="mb-5" dark>
            <v-toolbar-title>Provider Profile</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <material-card class="v-card-profile">
            <v-avatar slot="offset" class="mx-auto d-block" size="130">
              <img src="https://capenetworks.com/static/images/testimonials/user-icon.svg" />
            </v-avatar>
            <v-card-text class="text-xs-center">
              <h6 class="category text-gray font-weight-thin mb-3">Sample Text</h6>
              <h4 class="card-title font-weight-light">John Doe</h4>
              <p
                class="card-description font-weight-light"
              >SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT</p>
            </v-card-text>
          </material-card>
        </v-card>
        <v-spacer />
        <v-row>
          <v-col xs="12">
            <v-btn class="mx-3 my-2 font-weight-light" to="/Contact" dark color="#b53f74">Contact</v-btn>
            <v-btn
              class="mx-3 my-2 font-weight-light"
              to="/Home"
              dark
              color="#3f51b5"
            >Back to Dashboard</v-btn>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    source: String
  }
};
</script>