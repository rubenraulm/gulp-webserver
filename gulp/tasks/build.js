'use strict'

const gulp = require('gulp')
const gutil = require('gulp-util') // logs
const runSequence = require('run-sequence') // run-sequence: runs a sequence of gulp tasks in the specified order.
const plumber = require('gulp-plumber') // gulp-plumber: prevent pipe breaking caused by errors from gulp plugins
const paths = require('../paths')
const uglify = require('gulp-uglify') // gulp-uglify: uglify
const cleanCSS = require('gulp-clean-css')
const webpack = require('webpack-stream')

function onError (err) {
  gutil.beep()
  console.log(err)
  this.emit('end')
}

const webpackScripts= require('../webpack.scripts.js')
gulp.task('build:scripts', function () {
  return gulp.src(paths.mainJs)
  .pipe(plumber({errorHandler: onError}))
  .pipe(webpack(webpackScripts))
  .pipe(gulp.dest(paths.output))
})

gulp.task('build:scripts:prod', function () {
  webpackScripts.production = true
  return gulp.src(paths.mainJs)
  .pipe(plumber({errorHandler: onError}))
  .pipe(webpack(webpackScripts))
  .pipe(uglify())
  .pipe(gulp.dest(paths.output))
})

const webpackStyles = require('../webpack.styles.js')
gulp.task('build:styles', function () {
  webpackStyles.production = true
  return gulp.src(paths.mainCss)
  .pipe(plumber({errorHandler: onError}))
  .pipe(webpack(webpackStyles))
  .pipe(gulp.dest(paths.output))
})

gulp.task('build:styles:prod', function () {
  return gulp.src(paths.mainCss)
  .pipe(plumber({errorHandler: onError}))
  .pipe(webpack(webpackStyles))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest(paths.output))
})

gulp.task('build:html', function () {
  return gulp.src(paths.html)
  .pipe(plumber({errorHandler: onError}))
  .pipe(gulp.dest(paths.output))
})

gulp.task('copy:shtml', function () {
  return gulp.src(paths.shtml)
  .pipe(plumber({errorHandler: onError}))
  .pipe(gulp.dest(paths.output))
})

gulp.task('copy:placeholder', function () {
  return gulp.src(paths.placeholder)
  .pipe(gulp.dest(`${paths.output}/placeholder`))
})

gulp.task('copy:content', function () {
  return gulp.src(paths.content)
  .pipe(gulp.dest(`${paths.output}/content`))
})

// run-sequence: runs a sequence of gulp tasks in the specified order.
gulp.task('build', function () {
  return runSequence(
    ['build:scripts', 'build:styles', 'build:html', 'copy:shtml', 'copy:placeholder', 'copy:content']
  )
})

gulp.task('build:prod', function () {
  return runSequence(
    ['build:scripts:prod', 'build:styles:prod', 'build:html', 'copy:shtml', 'copy:placeholder', 'copy:content']
  )
})
