const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
var concat = require('gulp-concat');

gulp.task('concat', function() {
	    return gulp.src(['src/js/maqEscrever.js','src/js/menu.js','src/js/vetorIds.js','src/js/editCss.js','src/js/luz.js'])
      .pipe(concat('all.js'))
      .pipe(gulp.dest('src/js'));
  });

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