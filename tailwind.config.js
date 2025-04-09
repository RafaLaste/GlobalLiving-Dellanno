/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                primary: ['Apercu Pro', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '5%',
                screens: {
                    sm: '90%',
                    md: '90%',
                    lg: '90%',
                    xl: '90%',
                },
            },
            maxWidth: {
                'small': '58rem',
                'medium': '77rem',
                'large': '104rem',
            },
            spacing: {
                '15': '3.75rem',
                '30': '7rem',
                '40': '9.375rem',
                '50': '12.5rem',
            },
        },
    },
    plugins: [
        function({ addComponents }) {
            addComponents({
                'p + p': {
                    marginTop: '1rem',
                },
                'strong, b': {
                    fontWeight: 'bold'
                }
            })
        }
    ],
}

