/**


 import yargs from 'yargs';
 const argv = yargs.argv;
 const changed = argv.changed || true; |--------------------------------------------------------------------------
 | gulp move:systemFiles
 |--------------------------------------------------------------------------
 *
 * Move System Files like .htaccess or a index.php file to a public folder
 * These Files need to be copied from the CMS that is used.
 *
 * @package  generator-mh-boilerplate
 * @author   Martin Herweg <info@martinherweg.de>
 */

/*
 |--------------------------------------------------------------------------
 | move.system_files.js
 |--------------------------------------------------------------------------
 */

import config from '../../config.json';
import copy_files from '../lib/copy_files';
import gulp from 'gulp';

import yargs from 'yargs';
const argv = yargs.argv;
const changed = argv.changed || true;

const paths = {
  src: [`${config.src.systemFiles}**/*`, `${config.src.systemFiles}**/.*`],
  dest: `${config.dist.systemFiles}`,
};

const system_files = () => {
  console.log(changed);
  copy_files(paths.src, paths.dest, changed);
};

gulp.task('move:systemFiles', system_files);

export default system_files;
