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
		}
	},
	getters: {
		isLoggedIn: (state) => !!state.token,
		getUser: () => {
			return JSON.parse(localStorage.getItem('customer_user_data'));
		}
	},
	actions: {
		
	},
	modules: {}
});
