const config = {
  roots: [
    './',
    'test/suite',
  ],
  modulePaths: [
    './',
    'test/suite',
  ],
  setupTestFrameworkScriptFile: 'jest-enzyme',
  testResultsProcessor: 'jest-junit',
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
};

module.exports = config;
