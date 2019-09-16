<template>
  <v-container class="ma-auto">
    <h3 class="mb-4" v-if="hero.id === null">{{ $t('sentences.add-hero') | capitalize }} </h3>
    <h3 class="mb-4" v-else>{{ $t('sentences.edit-hero') | capitalize }} - {{ hero.superhero }}</h3>
    <v-form class="hero-form" ref='form' v-model="valid">
      <v-text-field v-model="hero.superhero"
        :label="$filters.capitalize($t('name.name-hero'))" :rules="[rules.empty]" />

      <v-select :items="publishers" v-model="hero.publisher"
        :label="$filters.capitalize($t('name.publisher'))" :rules="[rules.empty]" />

      <v-text-field v-model="hero.alter_ego"
        :label="$filters.capitalize($t('name.alter-ego'))" :rules="[rules.empty]" />

      <v-text-field v-model="hero.first_appearance"
        :label="$filters.capitalize($t('name.first-appearance'))" :rules="[rules.empty]" />

      <v-text-field v-model="hero.characters"
        :label="$filters.capitalize($t('name.characters'))" :rules="[rules.empty]" />

      <v-layout class="mt-5" justify-space-between>
        <v-btn  @click="onCancel" >{{ $t('verb.cancel') | capitalize }}</v-btn>
        <v-btn  @click="onValidate" >{{ $t('verb.validate') | capitalize }}</v-btn>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>

export default {
  name: 'HeroForm',
  props: {
    hero: {
      type: Object,
      default: () => {},
      required: true,
    },
    publishers: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data: () => ({
    valid: true,
    rules: {
      empty: v => !!v || 'This field is required',
    },
  }),
  updated() {
    this.$refs.form.resetValidation();
  },
  methods: {
    onValidate() {
      if (this.valid === true) this.$emit('validate', Object.assign({}, this.hero));
    },
    onCancel() {
      this.$emit('cancel');
    },
  },
};
</script>
