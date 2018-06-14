// require all modules ending in "-test" from the current directory and
// all subdirectories
const requireTest = require.context('./acceptance', true, /-test/);

requireTest.keys().forEach(requireTest);
