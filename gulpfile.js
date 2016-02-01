var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('app/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('app'));
});

gulp.task('sass:watch', function () {
  gulp.watch('app/**/*.scss', ['sass']);
});
