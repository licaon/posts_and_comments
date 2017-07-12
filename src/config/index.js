const environmentMapping = {
  dev: 'dev',
  development: 'dev',
  test: 'test',
  staging: 'prod',
  prod: 'prod',
  production: 'prod',
};

const environment = environmentMapping[process.env.NODE_ENV || 'development'];
const config = require(`assets/config/${environment}.config.json`);

export default config;
