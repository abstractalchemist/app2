const babel = require('babelify');
const gulp = require('gulp');
const browserify = require('browserify');



const mocha = require('gulp-mocha');
const source = require('vinyl-source-stream');

require('babel-core/register');

gulp.task('js', function() {
    return browserify({entries:'./src'}).transform(babel, { presets : ['es2015','react'] }).bundle().pipe(source("bundle.js")).pipe(gulp.dest('./dist'));
});

gulp.task('test', function() {
    return gulp.src('test/**/*js').pipe(mocha({}));
});
