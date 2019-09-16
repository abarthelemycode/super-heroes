import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store/index';
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';

Vue.filter('capitalize', (value) => {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.config.productionTip = false;
Vue.prototype.$filters = Vue.options.filters;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app');
