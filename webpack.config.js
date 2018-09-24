const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './react/react.app.js',
    output: {
        filename: 'react.app.js',
        path: path.resolve(__dirname, 'dist')
    }
};