<template>
  <div id="App">
    <HelloWorld />
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
