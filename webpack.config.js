const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
        ],
    },
    resolve: {
        alias: {
            constants: path.resolve(__dirname, 'src/constants'),
            pages: path.resolve(__dirname, 'src/pages'),
            components: path.resolve(__dirname, 'src/components'),
            helpers: path.resolve(__dirname, 'src/helpers'),
        },
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: './index.html',
        }),
    ],
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: `bundle.js`,
    },
    devServer: {
        contentBase: './build',
        disableHostCheck: true,
        historyApiFallback: true,
        port: 1234,
        hot: true,
    },
}