//const ExtractTextPlugin = require('extract-text-webpack-plugin'); 
//const extractMainCss = new ExtractTextPlugin('style.bundle.css');
const path = require("path");

module.exports = {
    entry: "./src/index",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        publicPath: "/dist"             // Enable webpack to recompile on change
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['', ".ts", ".tsx", ".js", ".json"]
    },
    module: {
        loaders: [
            // ts-loader: convert typescript (es6) to javascript (es6)
            //awesome-typescript-loader
            { test: /\.tsx?$/, loaders: ['ts-loader'], exclude: /node_modules/ },
            // babel-loader for pure javascript (es6) => javascript (es5)
            { test: /\.(js?)$/, loaders: ['babel'], exclude: /node_modules/}
            //{ test: /react-icons\/(.)*(.js?)$/   , loaders: ['babel-loader'], exclude: /node_modules/}
        // rules: [
        //     // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        //     { test: /\.tsx?$/, loader: "ts-loader" },
        //     // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        //     { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        // ]
        ]
    },

    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    node: {
      fs: 'empty'
    }
    //target: 'node'
};

