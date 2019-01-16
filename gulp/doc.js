var gulp = require('gulp');
var config = require('../package.json').config;

gulp.task('doc', function() {
    return gulp.src(config.src.doc)
        .pipe(gulp.dest(config.dist.doc));
});

gulp.task('doc:watch', function () {
    gulp.watch(config.src.doc, ['doc']);
});