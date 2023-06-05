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
				customOrange: "hsl(25, 97%, 53%)",
				lightGrey: "hsl(217, 12%, 63%)",
				mediumGrey: "hsl(216, 12%, 54%)",
				darkGrey: "hsl(215, 18%, 19%)",
				darkBlue: "hsl(213, 19%, 18%)",
				darkerBlue: "hsl(215, 27%, 12%)",
				veryDarkBlue: "hsl(216, 12%, 8%)",
			},
		},
	},
	plugins: [],
};
