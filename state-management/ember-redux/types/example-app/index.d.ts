
import Ember from 'ember';

declare global {
  interface Window {
    devToolsExtension?: () => void;
  }

  interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}
  // interface Function extends Ember.FunctionPrototypeExtensions {}
}

export {};
