const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: './dist',
          },
        compress: true,
        port: 9000,
        client: {
            overlay: {
                warnings: false
            }
        },
        proxy: {
            '/api': 'http://localhost:3000',
        },
    },
})