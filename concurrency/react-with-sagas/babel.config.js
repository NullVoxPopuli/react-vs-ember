module.exports = function(api) {
  api.cache(true);

  return {
    presets: [
      require('@babel/preset-typescript'),
      [require('@babel/preset-env'), {
        targets: {
          browsers: ['last 1 versions']
        }
      }]
    ],
    plugins: [
      require('@babel/plugin-transform-regenerator'),
      require('@babel/plugin-transform-async-to-generator'),
      require('@babel/plugin-transform-react-jsx'),
      require('@babel/plugin-proposal-class-properties'),
      require('@babel/plugin-proposal-object-rest-spread'),

      [require('@babel/plugin-proposal-decorators'), {
        decoratorsBeforeExport: false
      }],

      [require('babel-plugin-module-resolver'), {
        root: ['./src'],
        alias: {
          '~/store': ['src/redux-store'],
          '~/ui': ['src/ui']
        }
      }],
    ]
  };
}
