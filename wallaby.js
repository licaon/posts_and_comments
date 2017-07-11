module.exports = wallaby => ({
  files: [
    'src/**/*.js',
    'jest.config.js',
  ],

  tests: ['test/**/*spec.js'],
  compilers: {
    '**/*.js*': wallaby.compilers.babel(),
  },
  env: {
    type: 'node',
    runner: 'node',
  },

  testFramework: 'jest',

  setup: (w) => {
    const jestConfig = require('./jest.config');
    jestConfig.modulePaths[0] = w.projectCacheDir;
    w.testFramework.configure(jestConfig);
  },
  debug: true,
});
