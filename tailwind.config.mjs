/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        sans: ["DM Sans Variable", ...defaultTheme.fontFamily.sans],
				display: ["Unbounded Variable", "sans-serif"],
      },
			borderWidth: {
				'3': '3px',
			},
			borderRadius: {
				'menu': '0.6875rem',
			},
      gap: {
        'menu': '3.4375rem',
      },
			colors: {
				accent: '#FF6EB7',
				dark: '#1A1A1A'
			}
		},

	},
	plugins: [],
}
