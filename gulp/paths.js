'use strict'

const path = require('path')
const root = path.resolve(__dirname, '../')
const source = `${root}/src`

const paths = {
  root: root,
  source: source,
  output: `${root}/dist`,
  placeholder: `${source}/placeholder/**/*.*`,
  content: `${source}/content/**/*.*`,
  assets: `${source}/assets/**/*.*`,
  scripts: `${source}/scripts/**/*.js`,
  mainJs: `${source}/scripts/bundle.js`,
  vendor: `${source}/vendor/**/*.*`,
  styles: `${source}/**/*.css`,
  html: `${source}/**/*.html`,
  shtml: `${source}/**/*.shtml`,
  dist: `${root}/dist/**/*.*`,

  mainJs: `${source}/scripts/bundle.js`,
  mainCss: `${source}/styles/bundle.css`
}

module.exports = paths
