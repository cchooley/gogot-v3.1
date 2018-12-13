<template>
  <v-container>
    <h2>Welcome, {{ player.name }}!</h2>
    <v-btn @click="logout">logout</v-btn>
    <CharacterList :characters="characters"></CharacterList>
    <UserPicks></UserPicks>
  </v-container>
</template>

<script>
import CharacterList from "../components/CharacterList";
import UserPicks from "../components/UserPicks";

export default {
  data() {
    return {
      player: {}
    };
  },
  methods: {
    logout() {
      delete window.localStorage.token;
      this.$router.push({
        name: "home"
      });
    }
  },
  components: {
    CharacterList,
    UserPicks
  },
  created() {
    this.$store.dispatch("getAllCharacters");
  },
  computed: {
    characters() {
      return this.$store.state.dashboard.characters;
    }
  }
};
</script>

<style scoped>
</style>
