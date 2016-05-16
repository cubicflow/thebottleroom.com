var $             = require('gulp-load-plugins')();
var browserSync   = require('browser-sync');
var config        = require('../util/loadConfig');
var gulp          = require('gulp');
var ftp           = require('vinyl-ftp');

gulp.task('deploy', function() {

  console.log('DESTINATION IS:   ' + process.env.FTP_DESTINATION)

  var conn = ftp.create({
    host:     process.env.FTP_HOST,
    user:     process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    parallel: 7,
    log:      console.log
  });

// using base = '.' will transfer everything to /public_html correctly
// turn off buffering in gulp.src for best performance

return gulp.src( '_site/**/*', { base: '.', buffer: false } )
  .pipe( conn.newer( process.env.FTP_DESTINATION ) ) // only upload newer files
  .pipe( conn.dest( process.env.FTP_DESTINATION ) );
});
