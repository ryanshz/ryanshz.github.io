/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'sans': ['Inter', 'sans-serif'],
			'mono': ['JetBrains Mono', 'monospace']
		},
	},
	daisyui: {
		themes: ['business']
	},
	plugins: [
		typography,
		daisyui
	],
};