
var path = require("path");
var root = path.resolve(__dirname, '..');

console.log('root path: ', root);
console.log(root + '/src/**/*.ts');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
      'mocha',
      // 'chai',
      // 'karma-typescript'
    ],

    // files to watch
    files: [
      root + '/src/**/*.ts',
      root + '/src/**/*.tsx',
      root + '/tests/**/*-test.tsx',
      root + '/tests/**/*-test.ts',
    ],

    exclude: [
      'dist',,
      '.cache',
    ],

    preprocessors: {
      [`${root}**/*.js`]: ['webpack'],
      [`${root}/src/**/*.ts`]: ['webpack'],
      [`${root}/src/**/*.tsx`]: ['webpack'],
      [`${root}/tests/**/*.ts`]: ['webpack'],
      [`${root}/tests/**/*.tsx`]: ['webpack'],
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
      // 'karma-typescript'
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
      // 'karma-typescript',
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
