const mix = require("laravel-mix");
const WebpackRTLPlugin = require("webpack-rtl-plugin");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.babelConfig({
//     "presets": ["@babel/preset-env"],
//     "plugins": [
//         "@babel/plugin-transform-strict-mode"
//     ]
// })

mix.webpackConfig({
    optimization: {
        minimize: false,
    },
    plugins: [
        new WebpackRTLPlugin({
            filename: "[name]-rtl.css",
            options: {},
            plugins: [],
            diffOnly: false,
            minify: true,
        }),
    ],
});
mix.js("resources/js/config.js", "public/assets/js")
    .js("resources/js/emoji-button.js", "public/assets/js")
    .js("resources/js/flatpickr.js", "public/assets/js")
    .js("resources/js/theme.js", "public/assets/js")
    .sass("resources/scss/theme.scss", "public/assets/css")
    .options({
        processCssUrls: false,
    })
    .sass("resources/scss/user.scss", "public/assets/css")
    .options({
        processCssUrls: false,
    });




