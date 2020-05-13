import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
	en: {
		navbar: {
			profile: 'My Profile',
			courses: 'My Courses',
		},

		//Navbar
		dashboard: 'Dashboard',
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
		login: 'Login',
		emailValid: 'E-mail must be vaild',
		incorrectLogin: 'Email/Password is incorrect',
		noAccountError: 'Account does not exist',
		loginError: 'An error has occurred, We cannot log you in'
	},
	fr: {
		navbar: {
			profile: 'Mon Profil',
			courses: 'Mes Courses',
		},

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
		courses: 'Mes Stages',

		//Profile
		name: 'Nom',
		email: 'Email',
		phno: 'Téléphone',
		address: 'Adresse',
		pincode: 'Code postal',
		password: 'Mot de passe',
		resetPassword: 'Réinitialiser le mot de passe',

		//Login
		close: 'Fermer',
		login: 'Connexion',
		emailValid: 'L\'email doit être valide',
		incorrectLogin: "L'email / mot de passe est incorrect",
		noAccountError: 'Le compte n\'existe pas',
		loginError: 'Une erreur est survenue. Nous ne pouvons pas vous connecter'
	}
};

export const i18n = new VueI18n({
	locale: 'fr',
	fallbackLocale: 'fr',
	messages
});
