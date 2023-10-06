/** @type {import('tailwindcss').Config} */
export default {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'], // this ensures Tailwind checks all your React files for classes
	darkMode: false, // or 'media' or 'class'
	theme: {
	  extend: {},
	},
	variants: {},
	plugins: [],
  }
