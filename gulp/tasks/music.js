'use strict';

// Necessary Plugins
var gulp          = require('gulp')
    ,plumber      = require('gulp-plumber')
    ,paths        = require('../paths');

// Move Musics
module.exports = gulp.task('music', function(){
  return gulp.src(paths.source.music)
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.music))
});
