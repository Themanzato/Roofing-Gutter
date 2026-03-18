/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#D2FF72', // Principal Green-Yellow
                    light: '#E5FFB1',
                    dark: '#A8CC5B',
                },
                secondary: {
                    DEFAULT: '#73EC8B', // Soft Green
                    hover: '#5FCD74',
                },
                accent: {
                    DEFAULT: '#54C392', // Teal Green
                    light: '#F3F4F6',
                },
                dark: {
                    DEFAULT: '#15B392', // Deep Forest Green
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
