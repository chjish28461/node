let gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('compLess',()=>{
    gulp.src('./src/CSS/*.less')
    .pipe(less())
    .pipe(gulp.dest('./src/CSS'))
})
gulp.task("default",()=>{
    gulp.watch('./src/CSS/*.less',['compLess'])
});