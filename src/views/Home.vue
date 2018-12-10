<template>
  <v-container>
    <h1>You win, or you die.</h1>

    <form id="loginForm" @submit.prevent="handleLogin">
      <v-text-field v-model="email" label="E-mail" required></v-text-field>
      <v-text-field v-model="password" label="Password" required></v-text-field>

      <v-btn type="submit">submit</v-btn>
      <v-btn @click="clearLogin">clear</v-btn>
    </form>
  </v-container>
</template>

<script>
import APIService from "../services/APIService.js";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    handleLogin() {
      const player = { email: this.email, password: this.password };
      APIService.login(player).then(() => {
        this.$router.push({
          name: "dashboard"
        });
      });
    },
    clearLogin() {
      this.email = "";
      this.password = "";
    }
  }
};
</script>
