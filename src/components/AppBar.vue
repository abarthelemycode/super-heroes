<template>
  <div>
    <v-app-bar clipped-right app color="black accent-4" dark>
      <v-btn text to='/' >Super Heroes App</v-btn>
      <div class="flex-grow-1"></div>


      <div>
        <v-btn text to='/about' >{{ $t('adverb.about') | capitalize }}</v-btn>
      </div>
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on">{{ locale }} </v-btn>
        </template>

        <v-list>
          <v-list-item-group color="primary">
            <v-list-item v-for="lang in availableLocales"  :key="lang">
              <v-list-item-title @click="onClickLang(lang)">
                {{ $i18n.messages[lang].adjective['lang'] | capitalize }}
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group >
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>

export default {
  name: 'appBar',
  props: {
    locale: {
      type: String,
      default: () => '',
      required: true,
    },
    availableLocales: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  methods: {
    onClickLang(lang) {
      this.$emit('changeLocale', lang);
    },
  },
};

</script>
