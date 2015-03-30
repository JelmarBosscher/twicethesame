var gulp = require('gulp');
var server = require('gulp-server-livereload');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('webserver', function() {
  gulp.src('site')
    .pipe(server({
      livereload: true,
      port: 4040,
      defaultFile: 'index.html',
      directoryListing: false,
      open: true
    }));
});

gulp.task('default', function () {
    return gulp.src('site/css/main.css')
        .pipe(autoprefixer({
            browsers: ['> 1%', 'last 2 versions'],
            cascade: false
        }));
});