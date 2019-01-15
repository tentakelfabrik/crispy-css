let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

 mix.sass('src/scss/example.scss', 'dist/crispy.min.css', {
         includePaths: ["node_modules/normalize-scss/sass"]
     })
    .options({
        postCss: [
            require('postcss-css-variables')()
        ]
    });
