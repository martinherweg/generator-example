/**
 |--------------------------------------------------------------------------
 | gulp browser-sync
 |--------------------------------------------------------------------------
 *
 * Browser Sync
 * @description Refresh the Brwoser after File Change.
 * Combined with webpack for HMR or Content Reload
 *
 * @package  generator-mh-boilerplate
 * @author   Martin Herweg <info@martinherweg.de>
 */

/*
 |--------------------------------------------------------------------------
 | browser-sync.js
 |--------------------------------------------------------------------------
 */

import config from '../../config.json';
import gulp from 'gulp';
import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackSettings from '../../webpack/webpack.config.babel';

import yargs from 'yargs';
const argv = yargs.argv;
const env = argv.env || 'development';

const browserSyncTask = () => {
  if(env !== 'browser-sync') return;
  const bundler = webpack(webpackSettings);
  browserSync.init({
    proxy: {
      target: config.proxy,
      ws: true,
    },
    ghostMode: {
      clicks: true,
      forms: true,
      scroll: false,
    },
    logLevel: 'info',
    watchTask: true,
    open: false,
    stream: true,
    ui: {
      port: 8090,
    },
    middleware: [
      webpackDevMiddleware(bundler, {
        quiet: true,
        path: webpackSettings.output.path,
        publicPath: webpackSettings.output.publicPath,
        stats: {
          colors: true,
        },
      }),
      webpackHotMiddleware(bundler, {
        log: () => {},
      }),
    ],
    files: [
      `${config.dist.views}**/*.{php,html,twig}`,
      `${config.dist.images.base}**/*.{jpg,png,gif,svg}`,
      `${config.dist.css}**/*`,
    ],
  });

  browserSync.watch(config.dist.base + '**/*.css', function(event, file) {
    if (event === 'change') {
      browserSync.reload('*.css');
    }
  });
};


const browserSyncReload = () => {
  browserSync.reload();
};


gulp.task('browser-sync', browserSyncTask);
gulp.task('bs-reload', browserSyncReload);

export { browserSyncTask, browserSyncReload };
