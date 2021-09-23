const path = require('path')
const autoprefixer = require('autoprefixer')
const WebpackNotifierPlugin = require('webpack-notifier')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
  let mode = env.MODE || 'development'
  let plugins = [
    new WebpackNotifierPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/public/index.html')
    })
  ]
  let modules = {
    js: {
      test: /\.(js$|jsx?$)/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      ]
    },
    styles: {
      test: /\.(sass$|scss$|css$)/,
      exclude: /node_modules/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        {
          // Run postcss actions
          loader: 'postcss-loader',
          options: {
            // `postcssOptions` is needed for postcss 8.x;
            // if you use postcss 7.x skip the key
            postcssOptions: {
              // postcss plugins, can be exported to postcss.config.js
              plugins: function () {
                return [require('autoprefixer')]
              }
            }
          }
        },
        { loader: 'sass-loader' }
      ]
    },
    files: {
      test: /\.(png|jpg)$/i,
      use: [{ loader: 'file-loader' }]
    }
  }

  return {
    mode,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      publicPath: '/'
    },
    plugins,
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 3000,
      open: true,
      historyApiFallback: true
    },
    module: {
      rules: [modules.js, modules.styles, modules.files]
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  }
}
