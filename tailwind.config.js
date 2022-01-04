const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                primary: ['Manrope', ...fontFamily.sans],
            },
        },
    },
    plugins: [],
};
