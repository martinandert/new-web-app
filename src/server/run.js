import express from 'express';
import compression from 'compression';
import serveFavicon from 'serve-favicon';
import expiry from 'static-expiry';
import logger from 'morgan';
import errorHandler from 'errorhandler';
import { normalize } from 'path';

import hotify from './hotify';
import handle from './handle';

const publicPath = normalize(__dirname + '/../../static');

export default function run(app, { port, dev }) {
  app.set('view engine', 'ejs');

  if (dev) {
    hotify(app);
  }

  app.use(compression());
  app.use(serveFavicon(publicPath + '/favicon.ico'));
  app.use(expiry(app, { dir: publicPath, location: 'postfile' }));
  app.use(express.static(publicPath, { index: false }));
  app.use(logger(dev ? 'dev' : 'combined'));

  app.get('*', handle);

  if (dev) {
    app.use(errorHandler());
  }

  app.listen(port, () => {
    /* eslint-disable no-console */
    console.info(`Listening at http://localhost:${port}`);
    /* eslint-enable no-console */
  });
}
