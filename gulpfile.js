var gulp 			= require('gulp');
var less 			= require('gulp-less');
var livereload		= require('gulp-livereload');
var connect 		= require('gulp-connect');
var autoprefixer 	= require('gulp-autoprefixer');
var image 			= require('gulp-image');
var gutil			= require('gulp-util');
var uglify 			= require('gulp-uglifyjs');
var concat			= require('gulp-concat');
var jshint 			= require('gulp-jshint');
var bootlint 		= require('gulp-bootlint');



// static server
gulp.task('webserver', function(){
	connect.server({
		root: '../code/',
		port: 9008,
		livereload: true
		});
});

gulp.task('html', function(){
	gulp.src('*.html')
		.pipe(livereload());
});

gulp.task('css', function(){
	gulp.src('public/css/*.css')
		.pipe(livereload());
});

gulp.task('less', function(){
	return gulp.src('src/less/main.less')
		.pipe(less())
		.pipe(autoprefixer({
			browser: ['last 2 version'],
			cascade: false
			}))
		.pipe(gulp.dest('public/css/'))
		.pipe(livereload());
});

// gulp.task('bootlint', function(){
// 	return gulp.src('./index.html')
// 		.pipe(bootlint({
// 			stoponerror: true,
//             stoponwarning: true,
//             loglevel: 'debug',
//             disabledIds: ['W009', 'E007'],
//             reportFn: function(file, lint, isError, isWarning, errorLocation) {
//                 var message = (isError) ? "ERROR! - " : "WARN! - ";
//                 if (errorLocation) {
//                     message += file.path + ' (line:' + (errorLocation.line + 1) + ', col:' + (errorLocation.column + 1) + ') [' + lint.id + '] ' + lint.message;
//                 } else {
//                     message += file.path + ': ' + lint.id + ' ' + lint.message;
//                 }
//                 console.log(message);
//             },
//             summaryReportFn: function(file, errorCount, warningCount) {
//                 if (errorCount > 0 || warningCount > 0) {
//                     console.log("please fix the " + errorCount + " errors and "+ warningCount + " warnings in " + file.path);
//                 } else {
//                     console.log("No problems found in "+ file.path);
//                 }
//             }
// 		}));
// 	});

gulp.task('js-lib', function(){
	gulp.src('dist/js/*.js')
		.pipe(uglify('complete.js', {
			outSourceMap: true
			}))
		.pipe(gulp.dest('public/js/'));
});

gulp.task('js-only', function(){
	gulp.src('src/js/*.js')
		.pipe(uglify('all.js',{
			outSourceMap: true
			}))
		.pipe(gulp.dest('public/js/'));
});

gulp.task('images', function(){
	return gulp.src('public/img-min/*')
		.pipe(image({
			pngquant: true,
      		optipng: false,
      		zopflipng: true,
      		advpng: true,
      		jpegRecompress: false,
      		jpegoptim: true,
      		mozjpeg: true,
      		gifsicle: true,
      		svgo: true
		}))
		.pipe(gulp.dest('public/img--min'));
});

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('src/less/*.less', ['less']);
	gulp.watch(['*.html'], ['html']);
	gulp.watch(['public/css/*.css'], ['css']);
	gulp.watch('dist/js/*.js', ['js-lib']);
	gulp.watch('src/js/*.js', ['js-only']);
	gulp.watch('public/img/*', ['images']);
});	

gulp.task('default', ['less', 'webserver', 'watch', 'js-lib', 'js-only', 'html', 'css', 'images'/*, 'bootlint'*/])


