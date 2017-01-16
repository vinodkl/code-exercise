// Dynamic imports are not supported in ES6, using require instead of import.
/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
