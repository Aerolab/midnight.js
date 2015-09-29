var gulp = require('gulp')
, fs = require('fs')
, uglify = require("gulp-uglify")
, concat = require("gulp-concat")
, header = require("gulp-header");
 
var getVersion = function () {
    info = require("./package.json");
    return info.version;
};
var getCopyright = function () {
    return fs.readFileSync('Copyright');
};

gulp.task('build', function () {
    gulp.src('./src/midnight.jquery.src.js')
    .pipe(header(getCopyright(), {version: getVersion()}))
    .pipe(concat('midnight.jquery.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(uglify({preserveComments:'some'}))
    .pipe(concat('midnight.jquery.min.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build']);
