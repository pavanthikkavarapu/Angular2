var gulp=require("gulp");
var uglify=require("gulp-uglify");
var concat=require("gulp-concat");
var minifyHtml = require("gulp-minify-html");
var minifyCss = require("gulp-minify-css");
gulp.task("concat",function () {
   gulp.src("./src/*.js")
       .pipe(concat("final.min.js"))
       .pipe(uglify())
       .pipe(gulp.dest("./dest"));
});

gulp.task("minify-html",function () {
   gulp.src("./src/*.html")
       .pipe(concat("sample.min.html"))

       .pipe(minifyHtml())
       .pipe(gulp.dest("./dest"));
});

gulp.task("minify-css",function () {
    gulp.src("./src/*.css")
        .pipe(concat("sample.min.css"))
        .pipe(minifyCss())
        .pipe(gulp.dest("./dest"));
});