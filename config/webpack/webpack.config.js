const webpack = require('webpack');
const path = require('path');
const rootDir = path.resolve(__dirname, './../../')
const { paths } = require('./resolve.js')

const { DefinePlugin, LoaderOptionsPlugin, HotModuleReplacementPlugin } = webpack

module.exports = {
  resolve: {
    alias: paths,
  },
  entry: [
    'babel-polyfill',
    `${ rootDir }/client/index.js`,
  ],

  output: {
    filename: 'js/bundle.js',
    path: `${ rootDir }/public`,
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          },
        }],
      },
      {
        test: /\.(le|c)ss$/,
        include: `${ rootDir }/client`,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            }
        }, {
          loader: "less-loader", 
        }, {
          loader: 'postcss-loader',
            options: {
              config: {
                path: `${ rootDir }/config/webpack/plugins`,
              },
            },
          },
        ]
      },
    ]
  }
}

