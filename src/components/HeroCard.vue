<template>
  <v-card class="hero-card">
    <v-card-title class="hero-title">
      <v-row no-gutters>
        <v-col cols="9">
          <h2>{{ hero.superhero }}</h2>
          <h5>{{ hero.publisher }}</h5>
        </v-col>
        <v-col cols="3" justify-end>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn class="ma-1" icon v-on="on" @click="onFavorite" >
                  <v-icon :color="isFavorite" >mdi-heart</v-icon>
                </v-btn>
              </template>
              <span>{{ favoriteTooltip }}</span>
            </v-tooltip>
            <v-menu bottom left>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on"><v-icon>mdi-dots-vertical</v-icon></v-btn>
              </template>
              <v-list>
                <v-list-item-group color="primary">
                  <v-list-item>
                    <v-list-item-title @click="onEdit" >{{ $t('verb.edit') | capitalize }}</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title @click="onRemove">{{ $t('verb.delete') | capitalize }}</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>
          </v-col>
      </v-row>
    </v-card-title>
    <v-card-text class="hero-text">
      <h4>{{ $t('name.alter-ego') | capitalize }} :</h4>
      <p>{{ hero.alter_ego }} </p>
      <h4>{{ $t('name.characters') | capitalize }} :</h4>
      <p>{{ hero.characters }} </p>
      <h4>{{ $t('name.first-appearance') | capitalize }} :</h4>
      <p>{{ hero.first_appearance }} </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'HeroCard',
  props: {
    hero: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  computed: {
    isFavorite() {
      return (this.hero.favorite === 'true') ? 'red' : 'black';
    },
    favoriteTooltip() {
      const removeFavorite = this.$filters.capitalize(this.$t('sentences.remove-from-favorites'));
      const addFavorite = this.$filters.capitalize(this.$t('sentences.add-to-favorites'));
      return (this.hero.favorite === 'true') ? removeFavorite : addFavorite;
    },
  },
  methods: {
    onEdit() {
      this.$emit('edit', this.hero);
    },
    onRemove() {
      this.$emit('remove', this.hero);
    },
    onFavorite() {
      this.$emit('favorite', this.hero);
    },
  },
};
</script>

<style scoped lang="scss">
  .hero-card {
    margin:1rem;
  }

  .hero-title {
    h2 {
      font-size:1.5rem;
    }
    h5 {
      font-size:1rem;
    }
  }

  .hero-text {
    margin-top:1.5rem;
    h4 {
      font-size:1rem;
    }
    p{
      font-size:0.75rem;
      margin-bottom:0.5rem;
    }
  }

</style>
