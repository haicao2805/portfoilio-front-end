const colors = require('tailwindcss/colors');
const theme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: {
        content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        spacing: { ...theme.spacing, 112.5: '28.125rem', 166: '41.5rem' },
        extend: {},
        colors: {
            ...colors,
            'cod-gray': {
                DEFAULT: '#101010',
                50: '#838383',
                100: '#767676',
                200: '#5D5D5D',
                300: '#434343',
                400: '#292929',
                500: '#101010',
                600: '#000000',
                700: '#000000',
                800: '#000000',
                900: '#000000',
            },
        },
        backgroundImage: {
            ...theme.backgroundImage,
        },
        gridTemplateColumns: {
            ...theme.gridTemplateColumns,
        },
        boxShadow: {
            ...theme.boxShadow,
        },
    },
    variants: {
        extend: {},
    },
    corePlugins: {
        float: false,
    },
    plugins: [],
};
