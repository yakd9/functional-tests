function fn() {
  //var env = karate.env; // get system property 'karate.env'

   var apiKey = karate.properties['apiKey']
   var env = karate.properties['environment']
     karate.log('karate.env system property was:', apiKey);
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
  return config;
}