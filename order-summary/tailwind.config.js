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
				paleBlue: 'hsl(225, 100%, 94%)',
				brightBlue: 'hsl(245, 75%, 52%)',
				veryPaleBlue: 'hsl(225, 100%, 98%)',
				desaturatedBlue: 'hsl(224, 23%, 55%)',
				darkBlue: 'hsl(223, 47%, 23%)',
			},
		},
	},
	plugins: [],
};
