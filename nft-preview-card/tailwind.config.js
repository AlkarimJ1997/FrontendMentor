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
				softBlue: 'hsl(215, 51%, 70%)',
				customCyan: 'hsl(178, 100%, 50%)',
				mainBg: 'hsl(217, 54%, 11%)',
				cardBg: 'hsl(216, 50%, 16%)',
				line: 'hsl(215, 32%, 27%)',
			},
		},
	},
	plugins: [],
};
