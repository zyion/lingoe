
const path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'production',
    target: 'web',
    output: {
        library: 'Lingoe',
        path: path.resolve(__dirname, 'dist'),
        filename: 'lingoe.js'
    }
};
