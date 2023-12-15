"use strict"

import gulp from 'gulp';
const {src, dest} = gulp;


import rename from 'gulp-rename';


import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import purify from 'gulp-purifycss';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);


import concat from 'gulp-concat';
import uglify from 'gulp-uglify';


import imagemin from "gulp-imagemin";


import {create as bsCreate} from 'browser-sync';
const browserSync = bsCreate();
import clean from 'gulp-clean';

const srcPath = "src/";
const distPath = "dist/";

const path = {
    build: {
        html: distPath,
        styles: distPath + "styles/",
        scripts: distPath + "scripts/",
        images: distPath + "img/",
    },
    src: {
        html: srcPath + "*.html",
        styles: srcPath + "styles/*.scss",
        scripts: srcPath + "scripts/*.js",
        images: srcPath + "img/**/*.{png, jpg, svg, gif, ico, webp}",
    },
    watch: {
        html: srcPath + "**/*.html",
        styles: srcPath + "styles/**/*.scss",
        scripts: srcPath + "scripts/**/*.js",
        images: srcPath + "img/**/*.{png, jpg, svg, gif, ico, webp}",
    },
    clean: "./" + distPath + "/*"
}



export function serve() {
    browserSync.init({
        server: {
            baseDir: "./" + distPath
        }
    });
}

export function html() {
    return src(path.src.html, {base: srcPath})
        .pipe(dest(path.build.html))
        .pipe(browserSync.reload({stream: true}));
}

export function css() {
    return src(path.src.styles, {base: srcPath + "styles/"})
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(purify([path.src.html, path.src.scripts]))
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest(path.build.styles))
        .pipe(browserSync.reload({stream: true}));
}

export function js() {
    return src(path.src.scripts, {base: srcPath + "scripts/"})
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(dest(path.build.scripts))
        .pipe(browserSync.reload({stream: true}));
}

export function images() {
    return src(path.src.images, {base: srcPath + "img/"})
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(dest(path.build.images))
        .pipe(browserSync.reload({stream: true}));
}

export function cleanAll() {
    return src(path.clean)
        .pipe(clean());
}

export function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.styles], css);
    gulp.watch([path.watch.scripts], js);
    gulp.watch([path.watch.images], images);
}

export const build = gulp.series(cleanAll, gulp.parallel(html, css, js, images));
export const dev = gulp.parallel(watchFiles, serve);

const buildAndDev = gulp.parallel(build, watchFiles, serve);

export {buildAndDev as default };


