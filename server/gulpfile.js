'use strict';
const { watch, series, src, dest } = require('gulp');
const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass')(require('sass'));
var {concat} = require('gulp-concat');
const {cleanCSS} = require('gulp-clean-css')

function buildSass(){
    return src('../lib/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass()).on('error', sass.logError)
    .pipe(concat('main.css'))
    .pipe(cleanCSS({debug: true}, (details) => {
        console.log(`${details.name}: ${details.stats.originalSize}`);
        console.log(`${details.name}: ${details.stats.minifiedSize}`);
      }))
    .pipe(sourcemaps.write())
    .pipe(dest('../public/static/'))
}

function watchers(){
    watch('../lib/**/*.scss',buildSass)
}


exports.default = function(){
    
    series(buildSass,watchers)
    
}

