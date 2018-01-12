const path = require('path')
const webpack = require('webpack')
const mix = require('laravel-mix')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

mix
    .copy('resources/assets/img', 'public/img', false)
    .copy('resources/assets/fonts', 'public/fonts', false)
    .js('resources/assets/js/main.js', 'public/js')
    .sass('resources/assets/sass/main.scss', 'public/css')

    .sourceMaps()
    .version()
    .extract([
        'vue',
        'vform',
        'axios',
        'vuex',
        // 'jquery',
        'popper.js',
        'vue-i18n',
        'vue-meta',
        'js-cookie',
        'vue-router',
        'sweetalert2',
        'vuex-router-sync'
    ])

if (mix.inProduction()) {

}

mix.webpackConfig({
    plugins: [
        // new BundleAnalyzerPlugin(),
        new webpack.ProvidePlugin({
            Popper: ['popper.js', 'default']
        })
    ],
    resolve: {
        alias: {
            '~': path.join(__dirname, './resources/assets/js'),
            'global-sass': path.join(__dirname, './resources/assets/sass/_core.base.scss')
        }
    }
})
