/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				brightOrange: 'hsl(31, 77%, 52%)',
				darkCyan: 'hsl(184, 100%, 22%)',
				veryDarkCyan: 'hsl(179, 100%, 13%)',
				transparentWhite: 'hsla(0, 0%, 100%, 0.75)',
				veryLightGray: 'hsl(0, 0%, 95%)',
			},
			fontFamily: {
				bigShouldersDisplay: [
					'var(--font-big-shoulders-display)',
					'sans-serif',
				],
			},
		},
	},
	plugins: [],
};
