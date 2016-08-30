const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          path.join(__dirname, 'src')
        ],
        query: {
          presets: ['es2015']
        },
      },
    ],
  }
  // TODO: add sourcemap plugin if necessary
}
