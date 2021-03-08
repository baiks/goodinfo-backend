require('@babel/polyfill');
const express = require('express');
const expressWinston = require('express-winston');
const winston = require('winston');
const morgan = require('morgan');
const log = require('fancy-log');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const router = require('./routes');
const utils = require('./utils/utils');

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

const corsOptions = {
  credentials: true,
  origin: ['*'],
  default: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// compression and header security middleware
app.use(compression());
app.use(helmet());

app.use(morgan('dev'));

app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
  })
);
app.use(bodyParser.json());
// app.use(expressValidator());

app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    meta: false,
    expressFormat: true,
    colorize: true,
    format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
  })
);
utils.InvokeBTCAPI();
app.use(router);

//catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Resource does not exist');
  err.status = 404;
  next(err);
});

if (!isProduction) {
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    log(err.stack);
    res.status(err.status || 500).json({
      error: {
        message: err.message,
        error: err,
      },
      status: false,
    });
  });
}

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  return res.status(err.status || 500).json({
    error: {
      message: err.message,
      error: {},
    },
    status: false,
  });
});
app.locals;

// configure port and listen for request
const port = parseInt(process.env.NODE_ENV === 'test' ? 8378 : process.env.PORT, 10) || 8080;
const server = app.listen(port, () => {
  log(`Server is running on http://localhost:${port} `);
});
module.exports = app;
