'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('./source/sass/**/*.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./source/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./source/_patterns/**/*.scss', ['sass']);
});

// Copy all component js to a single concatenated file so it is easier to load in pattern library
gulp.task('scripts', function() {
  return gulp.src('./source/_patterns/**/*.js')
    // Remove the concat line below to instead copy all of the individual files.
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./source/js'));
});

gulp.task('scripts:watch', function () {
  gulp.watch('./source/_patterns/**/*.js', ['scripts']);
});