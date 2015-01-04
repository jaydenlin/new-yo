var gulp = require('gulp');
var gutil = require('gulp-util');
var imageop = require('gulp-image-optimization');
var del = require('del');


// Default
// =====================================

gulp.task('default',function() {

    //console.log( process.env);
});

// Build (only deal with HTML & Images)
// =====================================


gulp.task('build', ['copy','imgaemin'], function() {});


// Clean
// =====================================
gulp.task('clean', function (cb) {
    // You can use multiple globbing patterns as you would with `gulp.src`
    del(['dist'], cb);
});



// Copy HTML
// =====================================
gulp.task('copy',['clean'], function() {
    
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});



// Image min
// =====================================
gulp.task('imgaemin', function() {
    
  gulp.src('src/img/**/*').pipe(imageop({
            optimizationLevel: 7,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('dist/assets/img'));
});

