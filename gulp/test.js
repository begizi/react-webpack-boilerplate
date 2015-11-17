var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

gulp.task('test', ['lint'], function(cb) {
  runSequence(['jest'], cb);
});

gulp.task('jest', function() {
  return gulp.src('./src/**/__tests__')
  .pipe($.jest({
    rootDir: './src',
    scriptPreprocessor: '../preprocessor.js',
    unmockedModulePathPatterns: ['react']
  }).on('error', function() {
    this.emit('end');
  }));
});
