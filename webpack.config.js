var getConfig = require('hjs-webpack'); //returns complete webpack config with a few options available


module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  isDev: process.env.NODE_ENV !== 'production'
});