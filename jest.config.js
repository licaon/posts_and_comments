const config = {
  roots: [
    './',
    'test/suite',
  ],
  modulePaths: [
    './',
    'test/suite',
    'test/utils',
  ],
  automock: false,
  setupFiles: [
    './setupJest.js',
  ],
  setupTestFrameworkScriptFile: 'jest-enzyme',
  testResultsProcessor: 'jest-junit',
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
    'src/config': 'config.js',
  },
};

module.exports = config;
