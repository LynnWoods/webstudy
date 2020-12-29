const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');



module.exports = {
    entry: {
        main:'./src/main.js'
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [{
            test: /\.(png|jpg|gif)/,
            loader: 'file-loader',
            options: {
                name:'[name].[ext]',
                outputPath:'images'
            }
        },{
            test:/\.less$/,
            use:[
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        },{
            test: /\.(eot|ttf|woff|svg)$/,
            loader:'url-loader',
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin()
    ],
}





