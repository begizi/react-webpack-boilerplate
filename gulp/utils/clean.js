/**
 * Clean /dist folder
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('clean:dist', function() {
  gulp.src(['dist/**/*'], {read: false})
    .pipe($.rimraf());
});
