const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    devServer: {
        contentBase: resolve(__dirname, "dist"),
        compress: true,
        host: "127.0.0.1",
        port: 8081,
        open:true
    },
    entry: {
        main:'./src/main.js'
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        },{
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
    resolve:{
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
}





