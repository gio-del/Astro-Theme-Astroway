import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#FFF',
				'secondary': '#1D4CC4',
				'accent': '#0D2563',
				'text': '#353755',
				'dk-primary': '#0C2432',
				'dk-secondary': '#53C6FF',
				'dk-accent': '#55C2C3',
				'dk-text': '#C8DCF5',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		typography,
	],
}
