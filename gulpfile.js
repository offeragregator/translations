const gulp = require('gulp');
const json2po = require('json2po')
const po2json = require('gulp-po2json');

gulp.task('json2po', function() {
    return gulp.src('en.json')
      .pipe(json2po('template_en.po'))
      .pipe(gulp.dest('.'))
});

gulp.task('po2json', function () {
    return gulp.src(['./*.po'])
        .pipe(po2json())
        .pipe(gulp.dest('./translations/'));
});