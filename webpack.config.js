const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

var outputFolder = process.env.NODE_ENV === 'production' ? '/build' : '/public';

module.exports = {
  entry: ['regenerator-runtime', './src/index.jsx'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(ttf|eot|svg|gif|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + outputFolder,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.ejs`,
      filename: `${__dirname}/${outputFolder}/index.html`,
      lang: 'pt-BR',
      title: 'Framework',
      meta: {
        charset: 'utf-8',
        viewport: 'width=device-width, height=device-height, initial-scale=1'
      },
      scripts: [],
      links: [
        { href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"' },
      ]
    }),
    new Dotenv({
      path: path.resolve(__dirname, `./.env.${process.env.NODE_ENV}`),
      systemvars: true
    }),
  ],
  devServer: {
    contentBase: './public',
    compress: true,
    hot: true,
    port: 3000,
    historyApiFallback: true
  }
}