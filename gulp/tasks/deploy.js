var $             = require('gulp-load-plugins')();
var browserSync   = require('browser-sync');
var config        = require('../util/loadConfig');
var gulp          = require('gulp');
var ftp           = require('vinyl-ftp');
var minimist      = require('minimist');
var TRAVIS        = minimist(process.argv.slice(2));

gulp.task('deploy', function() {

  var conn = ftp.create({
    host:     TRAVIS.FTP_HOST,
    user:     TRAVIS.FTP_USER,
    password: TRAVIS.FTP_PASSWORD,
    parallel: 10,
    log:      console.log
  });

// using base = '.' will transfer everything to /public_html correctly
// turn off buffering in gulp.src for best performance

return gulp.src( '_site/**/*', { base: '.', buffer: false } )
  .pipe( conn.newer( TRAVIS.FTP_DESTINATION ) ) // only upload newer files
  .pipe( conn.dest( TRAVIS.FTP_DESTINATION ) );
});