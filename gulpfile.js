var gulp = require('gulp');

// svg
var svgstore = require('gulp-svgstore')
var svgmin = require('gulp-svgmin')
gulp.task('svg', function () {
  return gulp.src('svg/controller.svg')
             .pipe(svgmin())
             .pipe(svgstore({ fileName: 'icons.svg', prefix: 'icon-' }))
             .pipe(gulp.dest('assets'))
})


var sass = require("gulp-sass");

gulp.task('scss', function(){
  return gulp.src("scss/**/*")
    .pipe(sass())
    .pipe(gulp.dest('css'));

});
