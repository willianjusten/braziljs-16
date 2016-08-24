'use strict';

// Necessary Plugins
var gulp          = require('gulp')
    ,plumber      = require('gulp-plumber')
    ,paths        = require('../paths');

// Move Musics
module.exports = gulp.task('video', function(){
  return gulp.src(paths.source.video)
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.video))
});
