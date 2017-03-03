var gulp = require('gulp');
var gulp = require('gulp-sass');

gulp.task('styles', function (){
  gulp
  .src('index.scss')
  .pide(sass())
  .pipe(gulp.dest('public'));

})

gulp.task('default',['styles'])
