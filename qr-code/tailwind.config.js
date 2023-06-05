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
				lightGray: "hsl(212, 45%, 89%)",
				grayishBlue: "hsl(220, 15%, 55%)",
				darkBlue: "hsl(218, 44%, 22%)",
			},
		},
	},
	plugins: [],
};
