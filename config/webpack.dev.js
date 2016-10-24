var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  // Choose a developer tool to enhance debugging.
  devtool: 'cheap-module-eval-source-map',

  // Options affecting the output of the compilation. output options tell Webpack how to write the compiled files to disk.
  output: {
    // The output directory as absolute path (required).
    path: helpers.root('dist'),

    // The publicPath specifies the public URL address of the output files when referenced in a browser.
    publicPath: 'http://localhost:8080',

    // Specifies the name of each output file on disk.
    // [name] is replaced by the name of the chunk.
    filename: '[name].js',

    // The filename of non-entry chunks as relative path inside the output.path directory.
    // [id] is replaced by the id of the chunk.
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  // Can be used to configure the behaviour of webpack-dev-server when the webpack config is passed to webpack-dev-server CLI.
  devServer: {
    // Enables support for history API fallback, which means that a request will fallback to /index.html if no resource can be found.
    historyApiFallback: true,
    // Don't know what it is.
    stats: 'minimal'
  }
});