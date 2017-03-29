/**
 |--------------------------------------------------------------------------
 | gulp move:images
 |--------------------------------------------------------------------------
 *
 * Copies Images from images/cssimages and images/htmlimages in the images folder in dist
 * Also they are getting minified
 *
 * @package  generator-mh-boilerplate
 * @author   Martin Herweg <info@martinherweg.de>
 */

/*
 |--------------------------------------------------------------------------
 | move.images.js
 |--------------------------------------------------------------------------
 */

import config from '../../config.json';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import error_handler from '../lib/error_handler';

const $ = gulpLoadPlugins();

const paths = {
  src: [
    `${config.src.images.base}**/*`,
    `!${config.src.images.base}svg/**/*`,
  ],
  dest: `${config.dist.images.base}`,
};

const copy_images = () => {
  gulp
    .src(paths.src)
    .pipe($.changed(paths.dest))
    .pipe($.imagemin())
    .on('error', error_handler)
    .pipe(gulp.dest(paths.dest));
};

gulp.task('move:images', copy_images);

export default copy_images;
