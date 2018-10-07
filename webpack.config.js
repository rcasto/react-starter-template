const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/public/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist', 'public')
    },
    module: {
        rules: [{
            test: /\.css$/,
            // applied last to first (right to left)
            use: [
                'style-loader', 
                'css-loader' 
            ]
        }, {
            test: /\.scss$/,
            use: [
                'style-loader', // creates style nodes from JS strings
                'css-loader', // translates CSS into CommonJS
                'sass-loader' // compiles Sass to CSS, using Node Sass by default
            ]
        }, {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components|dist)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};