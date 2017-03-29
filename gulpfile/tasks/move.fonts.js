/**
 |--------------------------------------------------------------------------
 | gulp move:fonts
 |--------------------------------------------------------------------------
 *
 * Move Font Files
 *
 * @package  generator-mh-boilerplate
 * @author   Martin Herweg <info@martinherweg.de>
 */

/*
 |--------------------------------------------------------------------------
 | move.fonts.js
 |--------------------------------------------------------------------------
 */


import config from '../../config.json';
import copy_files from '../lib/copy_files';
import gulp from 'gulp';

const paths = {
  src: `${config.src.fonts}**/*`,
  dest: `${config.dist.fonts}`,
}

const move_fonts = () => {
  copy_files(paths.src, paths.dest);
}

gulp.task('move:fonts', move_fonts);

export default move_fonts;