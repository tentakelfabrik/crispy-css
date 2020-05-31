const mix = require('laravel-mix');

const SvgSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

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

mix.webpackConfig({
    plugins: [
        new SvgSpritemapPlugin('assets/svg/*.svg', {
            output: {
                filename: 'dist/examples/symbol-defs.svg'
            },
            sprite: {
                prefix: 'icon-'
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'dist/examples/index.html',
            template: 'src/html/index.html.ejs',
            title: 'Crispy CSS | Lightweight CSS Framework for Building Apps and Websites',
            description: 'Lightweight Framework for building fast and clean Websites and Apps for Mobile, Tablet and Desktop. Minimal UI-Elements, Functions and Helpers',
            footer: fs.readFileSync(__dirname + '/src/html/partials/footer.html'),
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'dist/examples/getting-started.html',
            template: 'src/html/page.html.ejs',
            title: 'Getting started!',
            body: fs.readFileSync(__dirname + '/src/html/partials/getting-started.html'),
            footer: fs.readFileSync(__dirname + '/src/html/partials/footer.html'),
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'dist/examples/core.html',
            template: 'src/html/page.html.ejs',
            title: 'Core',
            body: fs.readFileSync(__dirname + '/src/html/partials/core.html'),
            footer: fs.readFileSync(__dirname + '/src/html/partials/footer.html'),
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'dist/examples/components.html',
            template: 'src/html/page.html.ejs',
            title: 'Components',
            body: fs.readFileSync(__dirname + '/src/html/partials/components.html'),
            footer: fs.readFileSync(__dirname + '/src/html/partials/footer.html'),
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'dist/examples/helpers.html',
            template: 'src/html/page.html.ejs',
            title: 'Helpers',
            body: fs.readFileSync(__dirname + '/src/html/partials/helpers.html'),
            footer: fs.readFileSync(__dirname + '/src/html/partials/footer.html'),
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'dist/examples/mixins.html',
            template: 'src/html/page.html.ejs',
            title: 'Mixins',
            body: fs.readFileSync(__dirname + '/src/html/partials/mixins.html'),
            footer: fs.readFileSync(__dirname + '/src/html/partials/footer.html'),
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'dist/examples/functions.html',
            template: 'src/html/page.html.ejs',
            title: 'Functions',
            body: fs.readFileSync(__dirname + '/src/html/partials/functions.html'),
            footer: fs.readFileSync(__dirname + '/src/html/partials/footer.html'),
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'dist/examples/imprint.html',
            template: 'src/html/page.html.ejs',
            title: 'Imprint',
            body: fs.readFileSync(__dirname + '/src/html/partials/imprint.html'),
            footer: fs.readFileSync(__dirname + '/src/html/partials/footer.html'),
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'dist/examples/privacy-policy.html',
            template: 'src/html/page.html.ejs',
            title: 'Privacy Policy',
            body: fs.readFileSync(__dirname + '/src/html/partials/privacy-policy.html'),
            footer: fs.readFileSync(__dirname + '/src/html/partials/footer.html'),
            inject: false
        })
    ]
});

mix.sass('src/crispy-all.scss', 'dist/crispy-all.css')
    .sass('src/crispy-minimal.scss', 'dist/crispy-minimal.css')
    .sass('src/examples/styles.scss', 'dist/examples/styles.css', {
            sassOptions: {
                includePaths: [
                    'node_modules/reflex-grid/scss'
                ]
            }
    })
    .options({
        postCss: [
            require('postcss-css-variables')()
        ]
    });
