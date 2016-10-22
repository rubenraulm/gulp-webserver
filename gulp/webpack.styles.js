const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin') // stylesheet bundle is loaded in parallel to the javascript bundle.
const cssnano = require('cssnano')
const precss = require('precss')
const postcss = require('gulp-postcss') // CSS processor

const config = {
  cache: true,
  output: {
    filename: 'main.css'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'style-loader',
        'css-loader!postcss-loader'
      )
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'url?limit=11000&name=assets/[hash].[ext]!img?progressive=true'
    }
  ]},
  // autoprefixer: write normal CSS
  postcss: function () {
    return [precss, autoprefixer]
  },
  imagemin: {
    gifsicle: { interlaced: false },
    jpegtran: {
      progressive: true,
      arithmetic: false
    },
    optipng: { optimizationLevel: 5 },
    pngquant: {
      floyd: 0.5,
      quality: '50-80',
      speed: 6
    },
    svgo: {
      plugins: [
        { removeTitle: true },
        { convertPathData: false }
      ]
    }
  },
  plugins: [
    new ExtractTextPlugin('main.css')
  ]
}

module.exports = config
