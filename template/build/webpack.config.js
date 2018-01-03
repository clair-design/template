const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const postCSSOptions = {
  config: { path: './build/postcss.config.js' }
}

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../static'),
    publicPath: '/static/'
  },
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 }
            },
            {
              loader: 'postcss-loader',
              options: postCSSOptions
            }
          ]
        })
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: postCSSOptions
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [new ExtractTextPlugin('main.css')]
}
