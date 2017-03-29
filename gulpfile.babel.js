require('babel-core/register')({
  presets: [
    ['es2015']
  ]
})

//import requireDir from 'require-dir';
const requireDir = require('require-dir');

requireDir('./gulpfile/tasks', { recurse: true });