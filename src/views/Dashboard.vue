<template>
  <v-container>
    <CharacterList></CharacterList>
    <UserPicks></UserPicks>
  </v-container>
</template>

<script>
import CharacterList from "../components/CharacterList";
import UserPicks from "../components/UserPicks";

export default {
  components: {
    CharacterList,
    UserPicks
  }
};
</script>

<style scoped>
</style>
