# React vs Ember: Testing

This is the third post in a segment series on React (and React's ecosystem) vs Ember. To read the previous, [go here to read about State Management](https://github.com/NullVoxPopuli/react-vs-ember/tree/master/state-management). The previous posts are not required for reading this post, but makes the same general assumptions about prior knowledge. ([SPAs](https://en.wikipedia.org/wiki/Single-page_application), [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript), etc). [See the series intro here](https://github.com/NullVoxPopuli/react-vs-ember#react-vs-ember-introduction)


## A brief overview of what should be tested
- testing methodology

## Unit Testing

## Integration Testing Components

## Acceptance Testing


## Testing: Can be a big pain without the proper tools
Summary stuff here
why not enzyme?



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
 - the role of karma

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

https://github.com/bigtestjs/interactor
https://github.com/bigtestjs/react
 - simple


Good write up here on some timing problems: https://github.com/bigtestjs/convergence

https://github.com/bigtestjs: A Suite of JavaScript libraries and framework extensions to help you answer the question: Does my application work in real life?


Possible convergence with ember's testing strategy:
https://github.com/bigtestjs/meta/issues/2
