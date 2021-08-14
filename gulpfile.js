var gulp = require('gulp');


var ttf2woff2 = require('gulp-ttf2woff2');
gulp.task('ttf2woff2', function(){
    gulp.src(['fonts/*.ttf'])
      .pipe(ttf2woff2())
      .pipe(gulp.dest('fonts/'));
  });