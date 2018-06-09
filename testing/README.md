React vs Ember: testing


https://ropig.com/blog/end-end-tests-dont-suck-puppeteer/
https://facebook.github.io/jest/docs/en/puppeteer.html

https://codeburst.io/end-to-end-testing-with-headless-chrome-api-d564cb4150c3

http://instea.sk/2016/08/testing-react-applications-with-karma-jest-or-mocha/


https://docs.cypress.io/guides/overview/why-cypress.html#Writing-Tests

be sure to talk about:
 - puppeteer
 - nightmare
 - selenium
 - protractor
all
 - can't access dom directly in tests
 - can't change application state
 - none start the dev server for you

etc, and why they weren't used
also, jest vs mocha...

need to access application state during e2e tests for mocking

jsdom is fake, no window, no document, etc. must rely on it being up to date with emulating browsers

cypress: bloated.

protractor looks to be the closest to providing what ember has: https://www.protractortest.org/#/
- still no dom interaction. uses ElementFinder proxies, which all return promises, similar to cypress

Cypress: jquery elements

be also sure to mention all the transpiling and packager issues

cypress: Chainables aren't all promises, thus can't be awaited
