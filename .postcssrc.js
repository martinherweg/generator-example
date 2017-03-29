const config = require('./config.json');

module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 versions'],
      cascade: false
    }),
    require('postcss-flexbugs-fixes'),
    require('postcss-assets')({
      basePath: config.dist.base,
      loadPaths: ['assets/images/**/*'],
    }),
    require('postcss-aspect-ratio'),
  ],
};