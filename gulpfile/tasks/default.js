/**
 |--------------------------------------------------------------------------
 | gulp
 |--------------------------------------------------------------------------
 *
 * Default task run Browser Sync and Watch
 *
 * @package  generator-mh-boilerplate
 * @author   Martin Herweg <info@martinherweg.de>
 */

/*
 |--------------------------------------------------------------------------
 | default.js
 |--------------------------------------------------------------------------
 */

import gulp from 'gulp';
import run_sequence from 'run-sequence';

const defaultTask = (cb) => {
  run_sequence(
    [
      'browser-sync',
      'watch',
    ]
  )
}

gulp.task('default', defaultTask);

export default { defaultTask };