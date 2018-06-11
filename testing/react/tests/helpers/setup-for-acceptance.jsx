/* global describe, beforeEach, afterEach */
import { describe as mochaDescribe, test, skip, it } from '@bigtest/mocha';

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
// import startMirage from '../mirage/start';
// import TestHarness from './harness';
import Presentation from "@ui/application";

/**
 * Sets up the entire application with mirage, mounts it, and tears it down
 * Use this helper for end-to-end acceptance testing intead of the normal 'describe'
 *
 * ```
 * describeApplication('Acceptance', function() {
 *   it('should show something awesome', function() {
 *     expect($('h1')).to.have.text('something awesome');
 *   });
 * })
 * ```
 * @param {String} name - name of the test suite, passed to mocha's `describe`
 * @param {Function} setup - suite definition, also passed to `describe`
 */
export function describeApplication(name, setup, describe = mochaDescribe) {
  describe(name, function () {
    let rootElement;

    beforeEach(function () {
      rootElement = document.createElement('div');
      rootElement.id = 'react-testing';
      rootElement.style.height = '100%';
      document.body.appendChild(rootElement);

      // this.server = startMirage(setup.scenarios);
      // this.server.logging = false;

      this.app = render(<Presentation />, rootElement);
    });

    afterEach(function () {
      // this.server.shutdown();
      unmountComponentAtNode(rootElement);
      document.body.removeChild(rootElement);
      rootElement = null;
    });

    let doSetup = typeof setup.suite === 'function' ? setup.suite : setup;

    doSetup.call(this);
  });
}

describeApplication.skip = describe.skip;
describeApplication.only = function (name, setup) {
  return describeApplication(name, setup, describe.only);
};
