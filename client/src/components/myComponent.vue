<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-subheader>
          <div class="headline">My Component</div>
        </v-subheader>
      </v-row>

      <v-card class="mx-auto text-center" color="#b53f74" dark width="900px%">
        <v-card-text>
          <v-sheet color="rgba(0, 0, 0, .12)">
          
          </v-sheet>
        </v-card-text>

        <v-card-text>
          <div class="display-1 font-weight-thin">My Component</div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="justify-center">
          <v-btn block text to="/">Back to Dashboard</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  }
};
</script>