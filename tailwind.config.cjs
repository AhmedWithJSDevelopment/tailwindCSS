/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    // theme: {
    //     extend: {},
    // },
    plugins: [],



    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': "url('./src/img/7.gif')"
            }
        },

    }
}