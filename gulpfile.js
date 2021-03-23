const{watch, src, dest} = require('gulp');
const gulpCleanCss = require('gulp-clean-css');
const cleanCSS = require('gulp-clean-css');
const ts = require("gulp-typescript");


function minifyCSS(){
    return src('style/*.css')
    .pipe(cleanCSS())
    .pipe(dest('dist'));
}

function tsCompile(){
    return src('script/*.ts')
    .pipe(ts({
        noImplicitAny : true,
        out: "output.js",
    }))
    .pipe(dest('dist'));
}

function defaultTask(){
    watch('./style/*.css', { events: 'all' }, minifyCSS);
    watch('./script/*.ts', {events: 'all'}, tsCompile);
}

exports.default = defaultTask