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
				darkCyan: 'hsl(185, 75%, 39%)',
				darkDesaturatedBlue: 'hsl(229, 23%, 23%)',
				darkGrayishBlue: 'hsl(227, 10%, 46%)',
				darkGray: 'hsl(0, 0%, 59%)',
			},
		},
	},
	plugins: [],
};
