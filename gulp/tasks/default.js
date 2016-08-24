'use strict';

var gulp = require('gulp');

// Default task
module.exports = gulp.task('default', ['js', 'jade', 'notes', 'stylus', 'imagemin', 'music', 'video', 'watch', 'browser-sync', 'js']);
