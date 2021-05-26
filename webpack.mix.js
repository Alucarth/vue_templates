const mix = require('laravel-mix');

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
const name_version = `${process.env.APP_NAME}`
mix.js('resources/js/app.js', `public/${process.env.APP_NAME}/js`).vue()
   .sass('resources/css/app.scss', `public/${process.env.APP_NAME}/css`);
    // .postCss('resources/css/app.css', 'public/css', [
    //     //
    // ]);
