import gulp from 'gulp';
import run_sequence from 'run-sequence';

const build_production = (cb) => {
  run_sequence(
    [
      'clean:dist'
    ],
    [
      'favicons',
      'move:fonts',
      'move:images',
      'move:systemFiles',
      'move:views',
      'svg:sprite',
      'svg:single'
    ]
  )
}

gulp.task('build:production', build_production);

export default build_production;