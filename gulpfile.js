var gulp = require('gulp'),
    watch = require("gulp-watch");
// svg
var svgstore = require('gulp-svgstore')
var svgmin = require('gulp-svgmin')
gulp.task('svg', function () {
  return gulp.src('svg/**/*')
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

gulp.task("watch",function(){
  gulp.watch('scss/**/*', ['scss']);
  gulp.watch('svg/**/*', ['svg']);
});

gulp.task('default', ['scss', 'svg', 'watch']);
