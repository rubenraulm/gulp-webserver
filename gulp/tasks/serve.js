'use strict'

const gulp = require('gulp')
const gutil = require('gulp-util')
const connectSSI = require('connect-ssi') // Server Side Includes : <!--#include virtual="../file.txt" -->
const webserver = require('gulp-webserver')
const plumber = require('gulp-plumber')
const paths = require('../paths')

function onError (err) {
  gutil.beep()
  console.log(err)
  this.emit('end')
}

gulp.task('serve', () => {
  gulp.src('./dist')
  .pipe(plumber({errorHandler: onError}))
  .pipe(webserver({
    host: '0.0.0.0',
    port: 8080,
    fallback: 'index.shtml',
    middleware: [connectSSI({
      baseDir: paths.output
    })],
    livereload: {
      enable: true,
      filter: (fileName) => {
        if (fileName.match(/dist/)) { // Only reload when compiled files change
          return true
        }

        return false
      }
    },
    directoryListing: false,
    https: false
    // open: 'http://localhost:8080/'
  }))
})
