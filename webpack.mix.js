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

mix.sass('src/crispy_all.scss', 'dist/crispy_all.css', {
        sassOptions: {
            includePaths: [
                'node_modules/normalize-scss/sass'
            ]
        }
    })
    .sass('src/crispy_minimal.scss', 'dist/crispy_minimal.css', {
        sassOptions: {
            includePaths: [
                'node_modules/normalize-scss/sass'
            ]
        }
    })
    .sass('src/example/styles.scss', 'dist/example/styles.css', {
        sassOptions: {
            includePaths: [
                'node_modules/normalize-scss/sass',
                'node_modules/reflex-grid/scss'
            ]
        }
    })
    .copy('assets/iconmoon/symbol-defs.svg', 'dist/example')
    .options({
        postCss: [
            require('postcss-css-variables')()
        ]
    });
