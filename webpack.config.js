var path = require('path')
var webpack = require('webpack')
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './src/js/main.js',
  output: {
    path: path.join(__dirname, '/public/assets/js'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  // stats: {
  //   colors: true,
  //   reasons: true,
  //   chunks: false
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    // if you want to pass in options, you can do so:
    new MiniCssExtractPlugin({
     filename: '../css/style.css'
    })
  ],
  // automatically update bundles when source files change?
  watch: true
}

