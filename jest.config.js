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
};

module.exports = config;
