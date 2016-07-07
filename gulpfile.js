'use strict'

var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
var webpack = require('webpack-stream')
var sass = require('gulp-sass')

gulp.task('build-dev', ["webpack:build-dev"], function(){
	gulp.watch("js/**/*", ["webpack:build-dev"])
  gulp.watch("sass/**/*.scss", ['sass:build'])
})

gulp.task('build-css-dev', ["sass:build"], function(){
  gulp.watch("sass/**/*.scss", ['sass:build'])
})

gulp.task('webpack:build-dev', function(){
  try {
    return gulp.src('')
      .pipe(webpack(require('./webpack.config.js')))
      .pipe(gulp.dest('build/'))
  } catch (e) {
    console.warn("rar rar rar")
  }
})

gulp.task('sass:build', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
})

gulp.task('default', ['build-dev'])