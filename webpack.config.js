const path = require('path');

module.exports = {
    mode: 'development',
    entry: './react.app.js',
    output: {
        filename: 'react.app.js',
        path: path.resolve(__dirname, 'dist')
    }
};