'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('sass', function () {
  return gulp.src('build/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('layout/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('build/sass/**/*.scss', ['sass']);
});