
var path = require("path");
var root = path.resolve(__dirname, '..');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
      'mocha',
      // 'chai',
      'karma-typescript'
    ],

    // files to watch
    files: [
      path.resolve(root, 'src/**/*.ts'),
      path.resolve(root, 'src/**/*.tsx'),
      path.resolve(root, 'tests/**/*-test.tsx'),
      path.resolve(root, 'tests/**/*-test.ts'),
      path.resolve(root, 'node_modules/jsdom-global/register.js'),
      path.resolve(root, 'node_modules/tsconfig-paths/register.js'),
      path.resolve(root, 'node_modules/ts-node/register/index.js'),
    ],

    exclude: [
      'dist',,
      '.cache',
    ],

    preprocessors: {
      '**/*.js': ['webpack'],
      '../src/**/*.ts': ['karma-typescript', 'webpack'],
      '../src/**/*.tsx': ['karma-typescript', 'webpack'],
      '../tests/**/*.ts': ['karma-typescript', 'webpack'],
      '../tests/**/*.tsx': ['karma-typescript', 'webpack'],
    },

    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json',
      bundlerOptions: {
        entrypoints: /-test.tsx?$/,
        // exclude: ["**/*\.d\.ts$", "**/index.d.ts"],
        //for enzyme
        exclude: [
          "react/addons",
          "react/lib/ReactContext",
          "react/lib/ExecutionEnvironment"
        ],
        resolve: {
          extensions: [
            '.ts',
            '.tsx',
            '.d.ts',
            '.js',
            '.jsx',
          ],
        },
      },
      compilerOptions: {
        allowJs: true,
        module: 'commonjs',
        target: 'es5',
        lib: [
          'es5',
          'dom',
          'es6',
        ],
      },
      include: [
        "src",
        "tests",
        "types",
      ],
      exclude: [
        'node_modules'
      ]
    },

    reporters: [
      'mocha',
      'karma-typescript'
    ],

    // web server port
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,

    // provide a custom container which the app runs in
    // allows us to force fetch into polyfill mode & use pretender
    // customContextFile: 'tests/index.html',
    client: {
      mocha: {
        opts: 'tests/mocha.opts'
      },
    },

    autoWatch: true,
    browsers: ['Chrome'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    concurrency: Infinity,
    webpack: require(__dirname + '/webpack.config.js'),
    webpackMiddleware: { stats: 'errors-only' },
    plugins: [
      'karma-mocha',
      'karma-webpack',
      'karma-typescript',
      // 'karma-chai',
      'karma-mocha-reporter',
      'karma-chrome-launcher'
    ]
  });

  // CI config
  if (process.env.TRAVIS || process.env.CI) {
    config.singleRun = true;
    config.browsers = ['Chrome_travis_ci'];
  }
};
