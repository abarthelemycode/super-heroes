<template>
  <v-container>
    <v-tabs optional >
      <v-tab to="/home/marvel">Marvel Comics</v-tab>
      <v-tab to="/home/dc" >DC Comics</v-tab>
      <v-tab v-if="isFavoriteHeroes" to="/home/favorites">
        {{ $t('sentences.my-favorites') | capitalize }}
      </v-tab>
    </v-tabs>

    <router-view />
  </v-container>
</template>

<script>
export default {
  computed: {
    isFavoriteHeroes() {
      return this.$store.getters['heroModule/isFavoriteHeroes'];
    },
  },
};


</script>
