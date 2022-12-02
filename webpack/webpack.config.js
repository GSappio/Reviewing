const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/principal.js',
  output: {
      filename: 'principal.js',
      path: __dirname + '/public'
  }, 
  plugins: [
    new MiniCssExtractPlugin({
      filename: "estilo.css"
    })
  ],

  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        // 'style-loader', // Adiciconar css a dom injetando a tag <style>
        'css-loader' // interpretar @import, url()...
      ]
    }]
  }

};
