var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function() {
	gulp.src('style/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('style/'));
});

gulp.task('default', function() {
	gulp.run('sass');
});