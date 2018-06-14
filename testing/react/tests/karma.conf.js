
var path = require("path");
var root = path.resolve(__dirname, '..');

console.log('root path: ', root);

module.exports = function(config) {
  config.set({
    singleRun: false,
    basePath: '',
    frameworks: [ 'mocha' ],
    reporters: [ 'mocha' ],
    browsers: ['Chrome'],
    mime: { 'text/x-typescript': ['ts','tsx'] },

    port: 9876,
    colors: true,
    logLevel: 'DEBUG',

    files: [
      { pattern: path.resolve(root, 'tests/index.ts'), watched: false }
    ],

    exclude: [
      `${root}/dist`,
      `${root}/.cache`,
    ],

    preprocessors: {
      [`${root}/tests/index.ts`]: ['webpack']
    },

    client: {
      mocha: {
        reporter: 'html',
        opts: root + '/tests/mocha.opts'
      },
    },

    webpack: require(__dirname + '/webpack.config.js'),
    webpackMiddleware: { stats: 'minimal' },
    plugins: [
      'karma-mocha',
      'karma-webpack',
      'karma-mocha-reporter',
      'karma-chrome-launcher'
    ]
  });
};
