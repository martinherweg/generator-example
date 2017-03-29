/**
 |--------------------------------------------------------------------------
 | gulp move:views
 |--------------------------------------------------------------------------
 *
 * Just copy Template Files to Dist
 *
 * @package  generator-mh-boilerplate
 * @author   Martin Herweg <info@martinherweg.de>
 */

/*
 |--------------------------------------------------------------------------
 | move.views.js
 |--------------------------------------------------------------------------
 */


import config from '../../config.json';
import copy_files from '../lib/copy_files'
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import path from 'path';

const $ = gulpLoadPlugins();

import yargs from 'yargs';
const argv = yargs.argv;
const changed = argv.changed || true;

const paths = {
  src: `${config.src.views}**/*`,
  dest: `${config.dist.views}`,
};

const move_views = () => {
  copy_files(paths.src, paths.dest, changed);
};

gulp.task('move:views', move_views);

export default move_views;
