/**
 * This is a Boilerplate for new Tasks, delete this comment after creating your own file.
 * If you want to execute this task everytime your files change you have to add this to
 * the watch.js task.
 */

/**
 |--------------------------------------------------------------------------
 | gulp COMMAND
 |--------------------------------------------------------------------------
 *
 * SHORT DESCRIPTION OF WHAT IT DOES
 *
 * @package  generator-mh-boilerplate
 * @author   YOUR_NAME <your_email>
 */

/*
 |--------------------------------------------------------------------------
 | FILENAME
 |--------------------------------------------------------------------------
 */

import config from '../../config.json';
import gulp from 'gulp'
import gulp_load_plugins from 'gulp-load-plugins';

const $ = gulp_load_plugins();

const paths = {
  src: `YOUR_SRC_DIRECTORY`,
  dest: `YOUR_DEST_DIRECTORY`,
}

/**
 * This is Boilerplate Code for simple copy files from A to B
 */

import copy_files from '../lib/copy_files';

const task_name = () => {
  copy_files(paths.src, paths.dest);
}

/**
 * This can be deleted if you just want to copy files
 * then you just need the code above
 */

const gulp_task_name = () => {
  gulp
    .src(paths.src)
    .pipe($.pluginName())
    .pipe($.otherPluginName())
    .pipe(gulp.dest(paths.dest));
};

gulp.task('TASK_NAME', task_name);

export default task_name;
