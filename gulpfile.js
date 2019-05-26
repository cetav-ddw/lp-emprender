const gulp = require('gulp');
const eslint = require('gulp-eslint');
const connect = require('gulp-connect');
const open = require('gulp-open');

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

//
// Watch task.
//
gulp.task('watch', () => {
  gulp.watch('src/**/*.{html,css,js}', ['reload']);
  gulp.watch('src/js/**/*.js', ['lint']);
});

gulp.task('start', ['connect', 'open', 'lint', 'watch']);