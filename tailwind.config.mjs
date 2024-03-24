/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#FEFBF6',
				'secondary': '#8CB9BD',
				'accent': '#ECB159',
				'text': '#B67352',
				'dk-primary': '#0C2432',
				'dk-secondary': '#0499E4',
				'dk-accent': '#55C2C3',
				'dk-text': '#7E8C9C',
			},
		},
	},
	darkMode: 'class',
	plugins: [],
}
