/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
      colors: {
        darkCyan: 'hsl(158, 36%, 37%)',
        darkerCyan: 'hsl(158, 36%, 29%)',
        cream: 'hsl(30, 38%, 92%)',
        veryDarkBlue: 'hsl(212, 21%, 14%)',
        darkGrayishBlue: 'hsl(228, 12%, 48%)',
      },
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				fraunces: ["var(--font-fraunces)", "serif"],
			},
		},
	},
	plugins: [],
};
