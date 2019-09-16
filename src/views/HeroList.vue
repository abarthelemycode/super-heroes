<template>
    <v-container grid-list-md>
      <v-layout wrap fluid align-center>
        <v-text-field class="mr-8 searchBox" @input="onInputSearch"
          :label="$filters.capitalize($t('sentences.search-hero-by-name'))" />
        <v-btn @click="onOpenHeroForm(null)">{{ $t('sentences.add-hero') | capitalize }}</v-btn>
      </v-layout>

      <v-container >
        <v-layout row wrap>
          <v-flex xs12 sm6 md4  v-for="hero in heroesDisplay" :key="hero.id">
            <HeroCard :hero="hero" @favorite="onSetFavoriteHero"
            @edit="onOpenHeroForm"
            @remove="onRemoveHero" />
          </v-flex>
        </v-layout>
      </v-container>
      <v-navigation-drawer v-model="isEdit" app clipped fixed hide-overlay right width="400" >
        <HeroForm :hero="heroToUpdate" :publishers="publishers"
          @validate="onValidateForm"
          @cancel="onCloseHeroForm"/>
      </v-navigation-drawer>
    </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import HeroCard from '@/components/HeroCard.vue';
import HeroForm from '@/components/HeroForm.vue';

export default {
  name: 'HeroList',
  components: {
    HeroCard,
    HeroForm,
  },

  data: () => ({
    isEdit: false,
    heroToUpdate: {},
  }),

  watch: {
    heroesDisplay(newVal) {
      if (newVal.length === 0) this.$router.push({ path: '/home/marvel' });
    },
  },
  computed: {
    ...mapState('heroModule', ['heroesDisplay', 'searchTxt', 'publishers']),
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.setActualPage(to.name);
      vm.setHeroesDisplay();
    });
  },

  created() {
    this.setActualPage(this.$route.name);
    this.setHeroesDisplay();
  },

  methods: {
    ...mapActions('heroModule', ['setActualPage', 'setHeroesDisplay', 'setSearchTxt', 'addHero', 'updateHero', 'deleteHero']),

    onInputSearch(e) {
      this.setSearchTxt(e);
      this.setHeroesDisplay();
    },

    onOpenHeroForm(hero) {
      if (hero === null) {
        hero = {
          id: null,
          superhero: '',
          publisher: 'DC Comics',
          alter_ego: '',
          first_appearance: '',
          characters: '',
        };
      }

      this.heroToUpdate = Object.assign({}, hero);
      this.isEdit = true;
    },

    onCloseHeroForm() {
      this.isEdit = false;
    },

    onValidateForm(hero) {
      if (hero.id === null) this.addHero(hero);
      else { this.updateHero(hero); }
    },

    onRemoveHero(hero) {
      this.deleteHero(hero);
    },

    onSetFavoriteHero(hero) {
      hero.favorite = (hero.favorite === 'false') ? 'true' : 'false';
      this.updateHero(hero);
    },
  },
};
</script>

<style scoped lang="scss">
  .searchBox {
    max-width:20em;
  }
</style>
