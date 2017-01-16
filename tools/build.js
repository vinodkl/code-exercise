/* eslint-disable no-console */

import colors from 'colors';
import webpack from 'webpack';

import webpackConfig from '../webpack.config.prod';

process.env.NODE_ENV = 'production'; // no dev code apply

console.log('Generating minified bundle for production via Webpack. This will take a moment ...');

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(colors.red.bold(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.erros.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded
  console.log('Your app has been compiled in production mode and written to /.dist. It\'s ready to rooll!'.green);

  return 0;
});
