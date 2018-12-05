<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card>
          <v-layout row wrap>
            <v-flex xs5>
              <v-img :src="character.proPic" class="ma-2"></v-img>
            </v-flex>
            <v-flex xs7>
              <v-card-title>
                <div>
                  <h2>{{ character.name }}</h2>
                  <div>{{ character.aka }}</div>
                  <div>{{ character.gender }}</div>
                  <div>Played by {{ character.playedBy }}</div>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout>
            <v-card-actions>
              <v-btn v-if="character.eligible" flat color="green">Eligible</v-btn>
              <v-btn v-else flat color="red">Ineligible</v-btn>
              <v-btn flat color="warning" @click="$router.go(-1)">Go Back</v-btn>
            </v-card-actions>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    character: Object
  }
};
</script>

<style>
</style>
