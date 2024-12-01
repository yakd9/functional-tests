function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
    myVarName: 'someValue'
  }
  if (env == 'dev') {
    // customize
    // e.g. config.foo = 'bar';
  } else if (env == 'e2e') {
    // customize
  }
    config.apiUrl = process.env.KARATE_API_URL;
    config.username = process.env.KARATE_USERNAME;
    config.password = process.env.key;

    karate.log('karate.env system property was:', config);
  return config;
}