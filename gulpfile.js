var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    gulpMocha = require('gulp-mocha');


gulp.task('default', function(){
  nodemon({
    script: 'app.js', // what to run
    ext: 'js',        // what to look at
    env: {            // environment variables
      PORT: 8000
    },
    ignore: ['./node_modules/**']
  })
  .on('restart', function() {
    console.log('Restarting');
  });
});

gulp.task('test', function() {
  gulp.src('tests/*.js', {read: false})
      .pipe(gulpMocha({reporter: 'nyan'}))
});
