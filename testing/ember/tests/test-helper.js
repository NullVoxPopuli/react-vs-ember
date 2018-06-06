import Application from '../src/main';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import Qunit from 'qunit';

setApplication(Application.create({ autoboot: false }));

Qunit.assert.isFocussed = function(element, message) {
  this.pushResult({
    result: element == document.activeElement,
    actual: element,
    expected: document.activeElement,
    message: message || `${element.nodeName} is focussed`
  });
}

Qunit.assert.isNotFocussed = function(element, message) {
  this.pushResult({
    result: element != document.activeElement,
    actual: element.outerHTML,
    expected: document.activeElement.outerHTML,
    message: message || `${element.nodeName} is not focussed`
  });
}



start();
