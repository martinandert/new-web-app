require('source-map-support/register');

import express from 'express';
import run from './run';

const app = express();

const options = {
  port: process.env.PORT || 3000,
  dev: process.env.NODE_ENV !== 'production'
};

run(app, options);


