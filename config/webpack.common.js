var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  // The files to includes to the webpack bundling. Can be arrays.
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  // Options affecting the resolving of modules.
  resolve: {
    // An array of extensions that should be used to resolve modules
    extensions: ['', '.js', '.ts']
  },

  // Options affecting the normal modules
  module: {
    // An array of automatically applied loaders.
    loaders: [
      {
        // Loader for typescript files.
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        // Loader for html files.
        test: /\.html$/,
        loader: 'html'
      },
      {
        // Loader for assets.
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        // Loader for style files outside the source code.
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        // Loader for source code style files .
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ]
  },

  // Add additional plugins to the compiler.
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};