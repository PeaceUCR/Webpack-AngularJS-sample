/**
 * Created by hea on 3/15/19.
 */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpack = require('webpack');
//check the command is npm run test
let ENV = process.env.npm_lifecycle_event;
let isTest = ENV === 'test' || ENV === 'test-watch';

const config = {
    //entry with all requires at index.js
    /**
     * Entry
     * Reference: http://webpack.github.io/docs/configuration.html#entry
     * Should be an empty object if it's generating a test build
     * Karma will set this when it's a test build
     */
    entry: isTest ? null: path.resolve(__dirname,'./src/app.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    /*
    externals:{
        'angular': 'angular',
        "jquery": "jquery",
        "bootstrap": "bootstrap"
    },
    */
    module: {
        rules: [
            {
                //applied on all file end with js
                test: /\.js$/,
                use: 'babel-loader',
                //add exclude otherwise error reported!!!
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: isTest ? 'null-loader': [ 'style-loader', MiniCssExtractPlugin.loader , 'css-loader']
            },
            {
                test: /\.less$/,
                use: isTest ? 'null-loader': ['style-loader', MiniCssExtractPlugin.loader ,'css-loader', 'less-loader']
            },
            /*
            {
                // HTML LOADER
                test: /\.html$/,
                loader: 'html-loader'
            }
            */
            {
                test: /\.html$/,
                //without this exclude, then err here, window is not  defined
                //https://github.com/WearyMonkey/ngtemplate-loader/issues/74
                exclude: path.resolve(__dirname, './src/index.html'),
                use: [
                    { loader:'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './src')) },
                    { loader: 'html-loader' }
                ]
            }

        ]
    },
    devServer: {
        contentBase: './build',
        compress: true
        //port: 9000
    },
    plugins: [
    ],
    mode: 'development',
    devtool: isTest ? 'inline-source-map' : 'eval',
    cache: true,
    performance:{
        hints: false
    }
};

// ISTANBUL LOADER
// https://github.com/deepsweet/istanbul-instrumenter-loader
// Instrument JS files with istanbul-lib-instrument for subsequent code coverage reporting
// Skips node_modules and files that end with .spec.js
if (isTest) {
    config.module.rules.push({
        enforce: 'pre',
        test: /\.js$/,
        exclude: [
            /node_modules/,
            /\.spec\.js$/
        ],
        loader: 'istanbul-instrumenter-loader',
        query: {
            esModules: true
        }
    })
}

// Skip rendering index.html in test mode
if (!isTest) {
    // Reference: https://github.com/ampedandwired/html-webpack-plugin
    // Render index.html
    config.plugins.push(
        //let build has the independent html file
        new HtmlWebpackPlugin({
            //build file name
            filename: path.resolve(__dirname,'./build/index.html'),
            //source file
            template: path.resolve(__dirname,'./src/index.html')
            //note the script tag for bundle.js will auto added into test.html after build!
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    )
}

module.exports = config;