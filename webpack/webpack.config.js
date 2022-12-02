const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/principal.js',
  output: {
      filename: 'principal.js',
      path: __dirname + '/public'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader', // Adiciconar css a dom injetando a tag <style>
        'css-loader' // interpretar @import, url()...
      ]
    }]
  }

};
