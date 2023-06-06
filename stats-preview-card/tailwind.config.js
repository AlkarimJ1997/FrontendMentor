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
				mainBg: 'hsl(233, 47%, 7%)',
				cardBg: 'hsl(244, 38%, 16%)',
				softViolet: 'hsl(277, 64%, 61%)',
				mainParagraph: 'hsla(0, 0%, 100%, 0.75)',
				mainHeadings: 'hsl(0, 0%, 100%, 0.6)',
			},
			fontFamily: {
				lexendDeca: ['var(--font-lexend-deca)', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
