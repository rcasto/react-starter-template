const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist', 'public')
    },
    module: {
        rules: [{
            test: /\.css$/,
            // applied last to first (right to left)
            use: [ 'style-loader', 'css-loader' ]
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