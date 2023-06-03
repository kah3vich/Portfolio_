/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['"M PLUS Rounded 1c"', 'sans-serif'],
		},
		// colors: {
		// 	transparent: 'transparent',
		// 	black: 'rgba(32, 32, 35, 1)',
		// 	'black-0.5': 'rgba(32, 32, 35, 0.5)',
		// 	white: 'rgba(240, 231, 219, 1)',
		// 	'white-0.251': 'rgba(255, 255, 255, 0.251)',
		// 	'white-0.36': 'rgba(255, 255, 255, 0.36)',
		// 	'white-0.08': 'rgba(255, 255, 255, 0.08)',
		// 	green: 'rgba(34, 84, 61, 1)',
		// 	lime: 'rgba(198, 246, 213, 1)',
		// 	purple: 'rgba(128, 90, 213, 1)',
		// 	yellow: 'rgba(251, 211, 141, 1)',
		// 	pink: 'rgba(255, 99, 195, 1)',
		// 	blue: 'rgba(61, 122, 237, 1)',
		// 	'light-blue': 'rgba(129, 230, 217, 1)',
		// },
		// borderWidth: {
		// 	DEFAULT: '1px',
		// 	0: '0',
		// 	2: '2px',
		// 	3: '3px',
		// 	4: '4px',
		// 	6: '6px',
		// 	8: '8px',
		// 	10: '10px',
		// },
		// extend: {
		// 	//! Transition
		// 	transitionTimingFunction: {
		// 		DEFAULT: 'ease-in-out',
		// 	},
		// 	transitionDuration: {
		// 		DEFAULT: '500ms',
		// 	},
		// 	maxWidth: {
		// 		DEFAULT: '485px',
		// 	},
		// },
	},
	plugins: [
		// plugin(({ addComponents, theme, addUtilities }) => {
		// 	addComponents({
		// 		'.btn-primary': {
		// 			backgroundColor: theme('colors.orange.500'),
		// 		},
		// 	});
		// }),
	],
};
