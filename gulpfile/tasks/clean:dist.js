import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';

import config from '../../config.json';

gulp.task('clean:views', (cb) => {
  return del([
    config.dist.views + '**/*.{php,html}'
  ]).then(paths => {
    console.log('Deleted View files and folder:\n', paths.join('\n'));
  });
});

gulp.task('clean:images', (cb) => {
  return del([
    config.dist.images.base + '**/*.{png,PNG,jpg,JPG,jpeg,JPEG,svg,SVG,webp,WEBP,bmp,BMP,tif,TIF,gif,GIF}'
  ]).then(paths => {
    console.log('Deleted Image files and folder:\n', paths.join('\n'));
  });
});

gulp.task('clean:favicons', (cb) => {
  return del([
    config.dist.images.base + '**/*.{png,PNG,jpg,JPG,jpeg,JPEG,svg,SVG,webp,WEBP,bmp,BMP,tif,TIF,gif,GIF}'
  ]).then(paths => {
    console.log('Deleted Image files and folder:\n', paths.join('\n'));
  });
});

gulp.task('clean:dist', function(cb) {
  return runSequence(
    [
      'clean:views',
      'clean:images',
      'clean:favicons',
    ]
  )
})


