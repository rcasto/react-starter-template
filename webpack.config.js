const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/react/react.app.js',
    output: {
        filename: 'react.app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            // applied last to first (right to left)
            use: [ 'style-loader', 'css-loader' ]
        }]
    }
};