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
				lightRed: 'hsl(0, 100%, 67%)',
				orangeyYellow: 'hsl(39, 100%, 56%)',
				greenTeal: 'hsl(166, 100%, 37%)',
				cobaltBlue: 'hsl(234, 85%, 45%)',
        lightSlateBlue: 'hsl(252, 100%, 67%)', // bg
        lightRoyalBlue: 'hsl(241, 81%, 54%)', // bg
        violetBlue: 'hsla(256, 72%, 46%, 1)', // circle
        persianBlue: 'hsla(241, 72%, 46%, 0)', // circle
        paleBlue: 'hsl(221, 100%, 96%)',
        lavender: 'hsl(241, 100%, 89%)',
        darkGrayBlue: 'hsl(224, 30%, 27%)',
			},
		},
	},
	plugins: [],
};
