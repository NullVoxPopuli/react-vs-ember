
var path = require("path");
var root = path.resolve(__dirname, '..');

console.log('root path: ', root);

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
      'mocha',
    ],

    // files to watch
    files: [
      path.resolve(root, 'tests/**/*.ts'),
      path.resolve(root, 'tests/**/*.tsx'),
    ],

    exclude: [
      `${root}/dist`,
      `${root}/.cache`,
    ],

    preprocessors: {
      [`${root}/src/**/*.ts`]: ['webpack'],
      [`${root}/src/**/*.tsx`]: ['webpack'],
      [`${root}/tests/**/*.ts`]: ['webpack'],
      [`${root}/tests/**/*.tsx`]: ['webpack'],
    },

    reporters: [
      'progress',
      'mocha',
    ],

    // web server port
    port: 9876,
    colors: true,
    logLevel: 'DEBUG',

    // provide a custom container which the app runs in
    // allows us to force fetch into polyfill mode & use pretender
    // customContextFile: 'tests/index.html',
    client: {
      mocha: {
        reporter: 'html',
        opts: root + '/tests/mocha.opts'
      },
    },

    mime: {
      'text/x-typescript': ['ts','tsx']
    },

    autoWatch: true,
    browsers: ['Chrome'],
    // customLaunchers: {
    //   Chrome_travis_ci: {
    //     base: 'Chrome',
    //     flags: ['--no-sandbox']
    //   }
    // },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    concurrency: Infinity,
    webpack: require(__dirname + '/webpack.config.js'),
    webpackMiddleware: { stats: 'errors-only' },
    plugins: [
      'karma-mocha',
      'karma-webpack',
      'karma-mocha-reporter',
      'karma-chrome-launcher'
    ]
  });

  // // CI config
  // if (process.env.TRAVIS || process.env.CI) {
  //   config.singleRun = true;
  //   config.browsers = ['Chrome_travis_ci'];
  // }
};
