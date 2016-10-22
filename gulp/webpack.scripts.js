const webpack = require('webpack') // plugins & modules
const config = {
  cache: true,
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
    //   'dependencies': __dirname + '/../node_modules/dependencie.js' ex: scrollmagic, owl.carousel ...
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015-loose'] // loose mode: transpiles ES6 code to ES5
      }
    }
  ]},
  plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ]
}

module.exports = config
