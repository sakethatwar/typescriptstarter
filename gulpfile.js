var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
	tsProject = tsc.createProject('tsconfig.json');

// path variables for files 
var tsSource = './app/**/*.ts';
var tsTypings = './typings/**/*.ts';
var tsOutPath = './js/';

// Main task responsible for compiling typescript files
gulp.task('compile-ts', function () {    

 	var tsResult = gulp.src([tsSource,tsTypings])
                       .pipe(tsc(tsProject));

    tsResult.dts.pipe(gulp.dest(tsOutPath));
    return tsResult.js.pipe(gulp.dest(tsOutPath));
});

// responsible for watching ts files to auto compile
gulp.task('watch', function() {
    gulp.watch(tsSource,['compile-ts']);
});

//default task which runs when you call gulp
gulp.task('default', ['compile-ts','watch']);