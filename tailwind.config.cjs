/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite/plugin');

const config = {
    content: [
        "./src/**/*.{html,js,svelte,ts}",
        "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],

    theme: {
        extend: {},
    },

    plugins: [
        flowbite
    ],
    darkMode: 'class',
};

module.exports = config