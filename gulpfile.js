'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
 
gulp.task('sass', function () {
  return gulp.src('build/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('layout/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('build/sass/**/*.scss', ['sass']);
});