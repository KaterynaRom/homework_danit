import gulp from "gulp";
import concat from "gulp-concat";
import minify from "gulp-minify";
// import uglify from "gulp-uglify";
import cleanCSS from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";
import clean from "gulp-clean";
import imagemin from "gulp-imagemin";
import sass from "gulp-sass";

import BS from 'browser-sync';
const browserSync = BS.create();


// ***********************************************

const buildCss = () =>  gulp.src("src/scss/*.scss").
pipe(sass().on('error', sass.logError)).
pipe(concat("styles.min.css")).
pipe(autoprefixer({
   cascade: false
})).
pipe(cleanCSS({compatibility: 'ie8'})).
pipe(gulp.dest("dist/css"));


const buildJS = () => gulp.src("src/js/*.js").
pipe(concat("scripts.min.js")).
pipe(minify()).
pipe(gulp.dest("dist/js"));


const cleanDist = () => gulp.src("dist/*", {read: false}).pipe(clean());

const minifyImages = () => gulp.src("src/img/*").pipe(imagemin()).pipe(gulp.dest('dist/img'));


gulp.task("buildCss", buildCss);
gulp.task("buildJs", buildJS);
gulp.task("minifyImages", minifyImages);
gulp.task('build', gulp.series("buildCss", "buildJs", 'minifyImages'));
gulp.task("cleanDist", cleanDist);


const dist = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('src/**/*').on('change', gulp.series(buildCss, buildJS, browserSync.reload))
}

gulp.task('dev', dist);
gulp.task('build', build());