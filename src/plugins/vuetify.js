import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
		iconfont: 'mdi' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
	},
	theme: {
		themes: {
			light: {
				primary: '#8C2F48',
				secondary: '#FCB3C6',
				button: '#F3DFA2'
			}
		}
	}
});
