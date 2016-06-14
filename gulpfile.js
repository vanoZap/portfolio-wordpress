'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('build/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('layout/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('build/sass/**/*.scss', ['sass']);
});