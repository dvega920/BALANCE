<template>
    <div>
        <h2>Dashboard</h2>
        <p>Name: {{ user.name }}</p>
    </div>
</template>

<script>
import router from "../main.js"
import axios from "axios"

export default {
  name: "Login",
  data () {
    return {
      user: {
        name: "Jesse"
      }
    }
  },
  methods: {
    getUserData: function () {
      let self = this
      axios.get("/api/user")
        .then((response) => {
          console.log(response)
          self.$set(this, "user", response.data.user)
        })
        .catch((errors) => {
          console.log(errors)
          router.push("/")
        })
    }
  },
  mounted () {
    this.getUserData()
  }
}
</script>