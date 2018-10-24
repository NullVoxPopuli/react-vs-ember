'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
  let environment = EmberApp.env();
  let isProduction = environment === 'production';

  let app = new EmberApp(defaults, {
    // Add options here
    hinting: false,
    includeHighlightJS: false,
    includeHighlightStyle: false,
    snippetSearchPaths: ['src'],
    includeFileExtensionInSnippetNames: false,
    snippetPaths: [
      'src/slide-assets/snippets',
      'slide-assets/snippets'
    ],
    fingerprint: {
      // enabled: false,
      enabled: isProduction,
      generateAssetMap: true,
      prepend: 'https://nullvoxpopuli.github.io/react-vs-ember-indy-tech-talks-presentation/',
      // exclude: ['png', 'jpg', 'gif', 'svg']
    },
    ifa: {
      enabled: true,
      inline: false,
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('vendor/highlightjs.stub.js', {
    using: [ { transformation: 'amd', as: 'highlight.js' } ]
  });

  // app.import('vendor/highlightjs/styles/atom-one-dark.css');

  app.import('node_modules/reveal.js/js/reveal.js');
  app.import('node_modules/bulma/bulma.sass');

  let appTree = app.toTree();

  return mergeTrees([ appTree ]);
};
