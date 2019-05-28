const gulp = require('gulp');
const eslint = require('gulp-eslint');
const connect = require('gulp-connect');
const open = require('gulp-open');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

//
// Javascript linting.
//
gulp.task('lint', () => (
  gulp.src('src/js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
));

//
// Dev server.
//
gulp.task('connect', () => {
  connect.server({
    port: 3000,
    livereload: true,
    root: 'src',
  });
});

gulp.task('open', () => {
  gulp.src(__filename)
    .pipe(open({ uri: 'http://localhost:3000/' }));
});

gulp.task('reload', () => {
  gulp.src(__filename)
    .pipe(connect.reload());
});

gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

//
// Watch task.
//
gulp.task('watch', () => {
  gulp.watch('src/**/*.{html,css,js}', ['reload']);
  gulp.watch('src/js/**/*.js', ['lint']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('start', ['connect', 'open', 'lint', 'watch']);