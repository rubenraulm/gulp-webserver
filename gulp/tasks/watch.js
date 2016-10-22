'use strict'

const gulp = require('gulp')
const paths = require('../paths')
const runSequence = require('run-sequence')
const watch = require('gulp-watch')

gulp.task('watch', function () {
  return runSequence(
    'build',
    'serve',
    () => {
      watch(paths.placeholder, () => gulp.start('copy:placeholder'))
      watch(paths.scripts, () => gulp.start('build:scripts'))
      watch(paths.html, () => gulp.start('build:html'))
      watch(paths.shtml, () => gulp.start('copy:shtml'))
      watch(paths.styles, () => gulp.start('build:styles'))
    }
  )
})
