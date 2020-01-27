import Vue from 'vue';
import Vuex from 'vuex';
import VueCookies from 'vue-cookies';

Vue.use(Vuex);
Vue.use(VueCookies);

export default new Vuex.Store({
	state: {
		token: VueCookies.get('customer_user_token') || ''
	},
	mutations: {
		saveUser: (state, { user }) => {
			localStorage.setItem('customer_user_data', JSON.stringify(user));
		},
		signout: () => {
			VueCookies.remove('customer_user_token');
		}
	},
	getters: {
		isLoggedIn: (state) => !!state.token,
		getUser: () => {
			return JSON.parse(localStorage.getItem('customer_user_data'));
		}
	},
	actions: {},
	modules: {}
});
