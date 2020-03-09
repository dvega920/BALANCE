<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-subheader>
          <div class="headline">My Dashboard</div>
        </v-subheader>
      </v-row>
      <v-row dense>
        <v-col cols="6">
          <v-card height="100%" hover ripple>
            <v-card-media class="pa-0 pb-3">
              <v-avatar tile class="blue test">
                <v-icon x-large dark>mdi-account</v-icon>
              </v-avatar>
            </v-card-media>

            <v-card-title class="pt-0">
               <div>
                <v-card-title class="headline">Unlimited music now</v-card-title>

                <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
              </div>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card height="100%" hover ripple>
            <v-card-media class="pa-0 pb-3">
              <v-avatar tile class="blue test">
                <v-icon x-large dark>mdi-account</v-icon>
              </v-avatar>
            </v-card-media>

            <v-card-title class="pt-0">
               <div>
                <v-card-title class="headline">Unlimited music now</v-card-title>

                <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
              </div>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card height="100%" hover ripple>
            <v-card-media class="pa-0 pb-3">
              <v-avatar tile class="blue test">
                <v-icon x-large dark>mdi-account</v-icon>
              </v-avatar>
            </v-card-media>

            <v-card-title class="pt-0">
             <div>
                <v-card-title class="headline">Unlimited music now</v-card-title>

                <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
              </div>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card height="100%" hover ripple>
            <v-card-media class="pa-0 pb-3">
              <v-avatar tile class="blue test">
                <v-icon x-large dark>mdi-account</v-icon>
              </v-avatar>
            </v-card-media>

            <v-card-title class="pt-0">
              <div>
                <v-card-title class="headline">Unlimited music now</v-card-title>

                <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
              </div>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.card:hover .avatar {
  background-color: #3f51b5 !important;
}

.test {
  width: 100% !important;
  height: 65px !important;
  background-color: #3f51b5 !important;
  margin-bottom: 1rem;
}
</style>

<script>
export default {
  props: {
    source: String
  }
};
</script>