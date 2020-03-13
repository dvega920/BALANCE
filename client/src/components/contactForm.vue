<template>
  <div>
    <v-container fluid>
      <v-row justify="center">
        <v-col xs="12" sm="12" md="4">
          <v-card max-height="500x" height="100%" color="#3f51b5" dark>
            <v-card-text>
              <div class="overline font-weight-bold mb-4">Where to find us</div>
              <v-divider class="mb-3"></v-divider>
              <p class="mb-1">
                100 International Dr #350,
                <br />Portsmouth, NH 03801
              </p>
            </v-card-text>
            <v-card-text>
              <div class="overline font-weight-bold mb-4">Other Contact Information</div>
              <v-divider class="mb-3"></v-divider>
              <div>
                Phone: (555) 555-5555
                <br />E-Mail: balanceapp@gmail.com
                <br />
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col xs="12" sm="12" md="6">
          <v-card max-height="500x" height="100%">
            <v-toolbar color="indigo" dark>
              <v-toolbar-title>Contact Your Provider</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <form>
                <v-text-field
                  v-model="name"
                  :error-messages="nameErrors"
                  label="Name"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>

                <v-textarea
                  v-model="message"
                  label="Message"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-textarea>

                <v-btn color="indigo" dark @click="submit">Send</v-btn>
              </form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
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