/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#F8F8F8',
				'secondary': '#0C9E52',
				'accent': '#101010',
				'text': '#101010',
				'dk-primary': '#101010',
				'dk-secondary': '#4FFF43',
				'dk-accent': '#FBFF00',
				'dk-text': '#F8F8F8',
			},
		},
	},
	darkMode: 'class',
	plugins: [],
}
