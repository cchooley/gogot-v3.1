<template>
  <div id="app">
    <v-app>
      <v-content>
        <NavBar/>
        <router-view/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  },
  data() {
    return {
      //
    };
  }
};
</script>
