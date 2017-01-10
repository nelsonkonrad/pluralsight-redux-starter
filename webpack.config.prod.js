import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production') // The prod mode omits development specific fetures like PropTypes, also increases React's performance
};


export default {
  debug: true,
  devtool: 'source-map',        // A little bit slower but recommender for prod
  noInfo: false,
  entry: path.resolve(__dirname, 'src/index'),
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist' // now will be serving from dist folder rather than src
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(), // optimizes the order that our files are bundled in for optimal minification
    new webpack.DefinePlugin(GLOBALS),   // lets us define variables that are then made available to the libraries that Webpack is bundling
    new ExtractTextPlugin('styles.css'),  // extracts our CSS into a separate file
    new webpack.optimize.DedupePlugin(),  // eliminates duplicate packages in final bundle to keep it as small as possible
    new webpack.optimize.UglifyJsPlugin() // minifies JS
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};