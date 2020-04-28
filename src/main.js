import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueCookies from 'vue-cookies';

import { i18n } from './plugins/i18n.js';

Vue.use(VueCookies);

const ax = axios.create({
	baseURL: 'https://api.formavisioplus.com/v1'
});

Vue.prototype.$http = ax;

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	i18n,
	render: (h) => h(App)
}).$mount('#app');
