var gulp = require('gulp')
, fs = require('fs')
, uglify = require("gulp-uglify")
, concat = require("gulp-concat")
, header = require("gulp-header");
var pkg = require('./package.json');

function buildFunction () {
    return gulp.src('./midnight.jquery.js', {sourcemaps: true})
    .pipe(uglify({output: {comments:'some'}}))
    .pipe(header(fs.readFileSync('./midnight.header.txt', 'utf8'), { pkg : pkg } ))
    .pipe(concat('midnight.jquery.min.js'))
    .pipe(gulp.dest('./'));
}

var build = gulp.series(buildFunction);

exports.build = build;

exports.default = build;
