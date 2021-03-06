var path = require('path');
var webpack = require('webpack');
var process = require('process');

var env = process.env.NODE_ENV;

var config = {
  context: __dirname,
  target: 'web',
  name: 'redux-router-location',
  entry: './src/index.ts',

  output: {
    library: 'ReduxRouterLocation',
    libraryTarget: 'umd',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },

  plugins: [new webpack.optimize.OccurrenceOrderPlugin()],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: path.join(__dirname, 'src'),
        options: {
          configFile: 'tsconfig.json',
          silent: false,
        },
      },
    ],
  },

  externals: {
    history: {
      root: 'History',
      commonjs2: 'history',
      commonjs: 'history',
      amd: 'history',
    },
  },
};

if ('production' === env) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
        screw_ie8: false,
      },
      mangle: {
        screw_ie8: false,
      },
      output: {
        screw_ie8: false,
      },
    })
  );
}

module.exports = config;
