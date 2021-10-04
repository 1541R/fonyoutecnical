const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
/** @type {import('webpack').Configuration} */
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "SearchUXBundle.js",
        publicPath: "/"
    },
    mode: "production",
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                type: "asset",
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
            }
        ]
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx'],
    },
    plugins: [
        new CleanWebpackPlugin(), //Elimina todo
        new HtmlWebpackPlugin({
            template: "./public/index.html"    
        })
    ]
}