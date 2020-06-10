const mix = require("laravel-mix");
const LiveReloadPlugin = require("webpack-livereload-plugin");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    plugins: [new LiveReloadPlugin()],
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@": path.resolve(__dirname, "resources/js/"),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                enforce: "pre",
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {},
            },
        ],
    },
});

if (mix.inProduction()) {
    mix.version();
    mix.options({
        terser: {
            terserOptions: {
                compress: {
                    drop_console: true,
                },
            },
            extractComments: false,
        },
    });
} else {
    mix.sourceMaps();
    mix.disableNotifications();
}

mix.react("resources/js/app.js", "public/js").sass(
    "resources/sass/app.scss",
    "public/css"
);

mix.extract();
