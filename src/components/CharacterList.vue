<template>
  <v-container>
    <h2>Available Characters:</h2>
    <v-layout row wrap>
      <v-flex
        v-for="character in characters"
        :key="character.id"
        :character="character"
        xs12
        sm6
        md4
      >
        <router-link :to="{ name: 'character-show', params: { id: character.id } }">
          <v-card hover dark color="blue" class="mx-2 my-2">
            <v-layout justify-space-around align-center>
              <v-card-text class="px-3 py-4">{{ character.name }}</v-card-text>
              <v-avatar size="6vh" class="mx-3 my-2" color="grey lighten-4">
                <img :src="character.avatar" :alt="character.name">
              </v-avatar>
            </v-layout>
          </v-card>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["characters"]
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
