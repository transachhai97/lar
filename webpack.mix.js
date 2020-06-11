const path = require("path");
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

mix.webpackConfig((webpack) => {
    console.log(webpack);
    return {
        plugins: [new LiveReloadPlugin()],
        resolve: {
            extensions: [".js", ".jsx"],
            alias: {
                "@": path.resolve(__dirname, "resources/assets/js/"),
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
    };
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
    mix.sourceMaps(true, "cheap-module-source-map");
    mix.disableNotifications();
}

mix.react("resources/assets/js/app.js", "public/assets/js").sass(
    "resources/assets/sass/app.scss",
    "public/assets/css"
);

mix.extract();
