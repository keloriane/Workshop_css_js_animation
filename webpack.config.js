const path = require('path');
var webpack = require('webpack');
const imagePath = "./images";
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "app.css",
    disable: process.env.NODE_ENV === "development"
});
const browserSync = new BrowserSyncPlugin({
        files: [
            './assets/js/*',
            './assets/scss/*',
            './public/*.html',
        ],
        server: {
            baseDir: 'public',
            index: "public/index.html"
        }
});


module.exports = {
    entry: './assets/js/app.js',
    output: {path: path.resolve(__dirname, 'public'), filename: 'app.js'},
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{loader: "css-loader"}, {loader: "sass-loader"}], fallback: "style-loader"
            })
        },
        {
            test: /\.js$/,
            loader: "imports-loader?define=>false"
        },    
        {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [{
            loader: 'file-loader',
            options: {name: imagePath + '/[name].[ext]'}
            }]
        }
        ]
    },
   
   
          
    resolve: {
        alias: {
            "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
            "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
            "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
            "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
            "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
            "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
            "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
        }
      },
      
    plugins: [
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery: 'jquery'
        }),
        extractSass,browserSync
    ]
};
