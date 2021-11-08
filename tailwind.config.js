module.exports = {
    purge: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#ef5454",
                secondary: "#00a6c7",
            },
            fontFamily: {
                primary: ["Nunito"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
