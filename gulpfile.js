var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    minifyCss = require('gulp-minify-css');

var swallowError = function(error) {
    console.log(error.toString());
    this.emit('end');
};

/* SCSS */
gulp.task('scss', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass({ style: 'expanded' }))
        .on('error', swallowError)
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./css'))
        .pipe(livereload());
});


/* WATCH */
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('scss/**/*.scss', ['scss']);
});



/* DEFAULT */
gulp.task('default', ['scss']);