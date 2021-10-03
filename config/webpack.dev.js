const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { HotModuleReplacementPlugin } = require("webpack");
/** @type {import('webpack').Configuration} */

const devConfig = {
    mode: "development",
    devtool: 'source-map',
    module: {
        rules: [
            {
                use: [ "style-loader", "css-loader", "sass-loader" ],
                test: /.(css|sass|scss)$/ 
            }
        ],
    },
    devServer: {
        port: 3000,
        static: "../dist",
        historyApiFallback: true ,
        open: {
            app: {
                name: 'Google Chrome', //'Chrome' is 'Google Chrome' on macOS, 'google-chrome' on Linux, and 'chrome' on Windows.
            },
        },
        hot: true,
    },
    plugins: [ //Refresh dom but not states hot: true
        new HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ],
    devtool: "eval-source-map", //Genera los source en tiempo de desarrollo  para debugear

}

module.exports = merge(common, devConfig);