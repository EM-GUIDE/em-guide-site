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
				'10': '10px',
			},
      gap: {
        'menu': '3.4375rem',
      },
			colors: {
				accent: '#FF6EB7',
				dark: '#1A1A1A',
				'gray-medium': '#D9D9D9'
			},
			backgroundImage: {
        'carousel-background': "url('/carousel-bg.svg')",
        'triangle-background': "url('/triangle-bg.svg')",
				'arrow-gray-background': "url('/arrow-up-gray-bg.svg')",
        'arrow-pink-background': "url('/arrow-up-pink-bg.svg')",
      }
		},

	},
	plugins: [],
}
