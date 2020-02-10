const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');


gulp.task('styles', () => {
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'));
});

gulp.task('clean', () => {
    return del([
        'css/style.css',
    ]);
});


gulp.task('default', gulp.series(['clean', 'styles']));