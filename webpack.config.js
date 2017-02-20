const webpack = require('webpack');
const package = require('./package.json');
const banner  =
    " VueDialog plugin v" + package.version + "\n" +
    "\n" +
    " Dialog windows for Vue (like confirm or alert), based on Vuedals.\n" +
    "\n" +
    " @author "+ package.author.name +" <"+ package.author.email +">\n" +
    " "+ package.homepage +"\n" +
    " Released under the MIT License.";

module.exports = {
    entry: './src/vue-dialog.js',

    output: {
        path: './dist/',
        filename: 'vue-dialog.js',
        library: 'VueDialog',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    resolve: {
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: __dirname,
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.BannerPlugin(banner),
         new webpack.optimize.UglifyJsPlugin({
            minimize: false,
            sourceMap: false,
            mangle: false,
            compress: {
                warnings: false
            },
            output: {
                comments: true
            }
        })
    ]
};