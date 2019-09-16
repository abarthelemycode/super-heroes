<template>
  <v-app>
    <AppBar :locale="locale" :availableLocales="availableLocales" @changeLocale="onChangeLocale"/>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import AppBar from '@/components/AppBar.vue';

export default {
  name: 'App',
  components: {
    AppBar,
  },
  computed: {
    ...mapState('localeModule', ['locale', 'availableLocales']),
  },
  created() {
    this.$i18n.locale = this.locale;
    this.setAvailableLocales(this.$i18n.availableLocales);
  },
  methods: {
    ...mapActions('localeModule', ['setLocale', 'setAvailableLocales']),

    onChangeLocale(lang) {
      this.$i18n.locale = lang;
      this.setLocale(lang);
    },
  },
};
</script>
