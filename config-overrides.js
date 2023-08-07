const { override } = require('customize-cra');

module.exports = override((config) => {
  const newConfig = {
    ...config,
    resolve: {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        stream: false,
        zlib: require.resolve('browserify-zlib'),
        process: require.resolve('process/browser'),
        timers: require.resolve('timers-browserify'),
      },
      fullySpecified: false,
    },
  };
  return newConfig;
});
