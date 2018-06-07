const {defaults} = require('jest-config');

module.exports = {
  moduleDirectories: ["node_modules", ".", "src", "tests"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  setupTestFrameworkScriptFile: '<rootDir>/tests/support/setup.js',
  testMatch: [
     "**/__tests__/**/*test.ts",
     "**/*test.ts",
     "**/*test.js"
  ],
  transform: {
   "^.+\\.(t|j)sx?$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.jest.json"
    }
  },
}
