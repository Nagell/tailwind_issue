/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // This enables dark mode based on the presence of the "dark" class in the HTML tag
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',

                primary: {
                    DEFAULT: 'rgb(var(--primary))',
                    inverse: 'rgb(var(--primary-inverse))',
                    hover: 'rgb(var(--primary-hover))',
                    active: 'rgb(var(--primary-active))',

                    highlight: {
                        DEFAULT: 'rgb(var(--primary)/var(--primary-highlight-opacity))',
                        inverse: 'rgb(var(--primary-highlight-inverse))',
                        hover: 'rgb(var(--primary)/var(--primary-highlight-hover-opacity))',
                    },

                    50: 'rgb(var(--primary-50))',
                    100: 'rgb(var(--primary-100))',
                    200: 'rgb(var(--primary-200))',
                    300: 'rgb(var(--primary-300))',
                    400: 'rgb(var(--primary-400))',
                    500: 'rgb(var(--primary-500))',
                    600: 'rgb(var(--primary-600))',
                    700: 'rgb(var(--primary-700))',
                    800: 'rgb(var(--primary-800))',
                    900: 'rgb(var(--primary-900))',
                    950: 'rgb(var(--primary-950))',
                },

                surface: {
                    0: 'rgb(var(--surface-0))',
                    50: 'rgb(var(--surface-50))',
                    100: 'rgb(var(--surface-100))',
                    200: 'rgb(var(--surface-200))',
                    300: 'rgb(var(--surface-300))',
                    400: 'rgb(var(--surface-400))',
                    500: 'rgb(var(--surface-500))',
                    600: 'rgb(var(--surface-600))',
                    700: 'rgb(var(--surface-700))',
                    800: 'rgb(var(--surface-800))',
                    900: 'rgb(var(--surface-900))',
                    950: 'rgb(var(--surface-950))',
                }
            }
        }
    },
    plugins: [
    ],
}
