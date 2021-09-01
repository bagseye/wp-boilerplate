var sass = require('gulp-sass')(require('sass'));
import { src, dest, watch, series, parallel } from "gulp";

// Import sass from gulp-sass 
import cleanCss from "gulp-clean-css";
import uglify from "gulp-uglify-es";
import rename from "gulp-rename";

import postcss from "gulp-postcss";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "autoprefixer";

import del from "del"; 

export const cleanCSSDistFiles = () => del(
    [
        "css/atf.css*",
        "css/atf.min.css*",
        "css/main.css*",
        "css/main.min.css*",
    ]
);

export const cleanJSDistFiles = () => del([ "js/**/*.min.js" ]);

const processStyles = () => {
    return src(["sass/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer({ grid: "autoplace" })]))
    .pipe(cleanCss({ compatibility: "ie11" }))
    .pipe(sourcemaps.write("."))
    .pipe(dest("css"));
};

const processBlockStyles = () => {
    return src(["gutenberg/**/*.scss"])
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer({ grid: "autoplace" })]))
    .pipe(cleanCss({ compatibility: "ie11" }))
    .pipe(dest((file) => file.base));
};

const processJSWithSourcemaps = () => {
    return src(["js/**/*.js", "!js/**/*.min.js"])
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.init())
    .pipe(
    uglify().on("error", (err) => {
        console.log(err);
    })
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest((file) => file.base));
};

const processJS = () => {
    return src(["js/**/*.js", "!js/**/*.min.js"])
    .pipe(rename({ suffix: ".min" }))
    .pipe(
    uglify().on("error", (err) => {
        console.log(err);
    })
    )
    .pipe(dest((file) => file.base));
};

const watchAssetForChanges = () => {
    watch("gutenberg/**/*.scss", processBlockStyles);
    watch("sass/**/*.scss", processStyles);
    watch(["js/**/*.js", "!js/**/*.min.js"], processJS);
};

const watchForCssChanges = () => {
    watch("gutenberg/**/*.scss", processBlockStyles);
    watch("sass/**/*.scss", processStyles);
};

export const fullDev = series(
    cleanCSSDistFiles,
    cleanJSDistFiles,
    processStyles,
    processBlockStyles,
    processJS,
    watchAssetForChanges
);
  
export const cssDev = series(
    cleanCSSDistFiles,
    processStyles,
    processBlockStyles,
    watchForCssChanges
);
  
export const buildAllAssets = series(
    cleanCSSDistFiles,
    cleanJSDistFiles,
    processStyles,
    processJS
);
  
export const cssBlocks = series(
    processBlockStyles,
);
  
export const buildCss = series(cleanCSSDistFiles, processStyles);
export const buildJs = series(cleanJSDistFiles, processJS);
  
export default cssDev;