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
                    DEFAULT: '#111F35', // Dark Navy (User provided)
                    light: '#1e3a5f',
                    dark: '#0a1120',
                },
                secondary: {
                    DEFAULT: '#F63049', // Bright Red/Pink (User provided) - Replaces Orange
                    hover: '#D02752',   // Darker Red/Pink (User provided)
                },
                accent: {
                    DEFAULT: '#8A244B', // Deep Burgundy (User provided)
                    light: '#F3F4F6', // Keep a light gray for backgrounds if needed, or map to user's palette
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
