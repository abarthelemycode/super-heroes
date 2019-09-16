import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enJSON from '../translations/en.json';
import frJSON from '../translations/fr.json';

const messages = {
  en: enJSON,
  fr: frJSON,
};

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});
