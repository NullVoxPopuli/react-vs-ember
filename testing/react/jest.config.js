const {defaults} = require('jest-config');

module.exports = {
  moduleDirectories: ["node_modules", "."],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  setupTestFrameworkScriptFile: '<rootDir>/tests/support/setup.js',
  testMatch: [
     "**/__tests__/**/*test.ts",
     "**/*test.ts"
  ],
  transform: {
   "^.+\\.(ts|tsx)$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.jest.json",
      skipBabel: true
    }
  },
}
