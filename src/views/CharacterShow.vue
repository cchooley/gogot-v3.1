<template>
  <v-container>
    <CharacterCard :character="character"/>
  </v-container>
</template>

<script>
import APIService from "../services/APIService.js";
import CharacterCard from "../components/CharacterCard.vue";

export default {
  props: ["id"],
  components: {
    CharacterCard
  },
  data() {
    return {
      character: {}
    };
  },
  created() {
    APIService.getCharacter(this.id)
      .then(response => {
        this.character = response.data.character;
        console.log(this.character);
      })
      .catch(error => {
        console.log("There was an error: " + error.response);
      });
  }
};
</script>

<style>
</style>
