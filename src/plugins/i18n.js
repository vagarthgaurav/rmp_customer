import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
	en: {
		//Navbar
		dashboard: 'Customer Dashboard',
		language: 'Language',
		logout: 'Logout',

		//Home
		search: 'Search',
		location: 'Location',
		startDate: 'Start Date',
		endDate: 'End Date',
		startTime: 'Start Time',
		endTime: 'End Time',
		price: 'Price',
		courses: 'Courses',

		//Profile
		name: 'Name',
		email: 'Email',
		phno: 'Phone number',
		address: 'Address',
		pincode: 'Pincode',
		password: 'password',
		resetPassword: 'Reset Password',

		//Login
		close: 'Close',
		login: 'Se connecter'
	},
	fr: {
		//Navbar
		dashboard: 'Tableau de bord client',
		language: 'Langue',
		logout: 'Déconnexion',

		//Home
		search: 'Rechercher',
		location: 'Lieu',
		startDate: 'Date de début',
		endDate: 'Date de fin',
		startTime: 'Heure de début',
		endTime: 'Heure de fin',
		price: 'Prix',
		courses: 'Stages',

		//Profile
		name: 'Nom',
		email: 'Email',
		phno: 'Téléphone',
		address: 'Adresse',
		pincode: 'Code postal',
		password: 'Mot de passe',
		resetPassword: 'Réinitialiser le mot de passe',

		close: 'Fermer',
		login: 'Connection'
	}
};

export const i18n = new VueI18n({
	locale: 'fr',
	fallbackLocale: 'fr',
	messages
});
