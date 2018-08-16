const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Quiz task',
            template: 'src/index.html'
        })
    ]
};