// typescript typing hack
// cannot redeclare block-scoped variable chai
export {};


// require all modules ending in "-test" from the current directory and
// all subdirectories
const requireTest = require.context('./acceptance', true, /-test/);
const requireIntegrationTests = require.context('./../src', true, /-test/);

requireTest.keys().forEach(requireTest);
requireIntegrationTests.keys().forEach(requireIntegrationTests);

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

chai.use(sinonChai)
