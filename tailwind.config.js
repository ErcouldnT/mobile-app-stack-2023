import konstaConfig from 'konsta/config';

/** @type {import('tailwindcss').Config} */
export default konstaConfig({
	content: ['./src/**/*.{html,js,svelte,ts}'],
	// darkMode: 'media', // or 'class'
	theme: {
		extend: {}
	},
	// variants: {
	// 	extend: {}
	// },
	plugins: []
});
