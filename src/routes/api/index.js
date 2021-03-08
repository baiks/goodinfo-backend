const express = require('express');
const btcrouter = require('./bitcoin.route');
const welcomeroute = require('./welcome.route');

const routes = express.Router();
routes.use('/', welcomeroute);
routes.use('/', btcrouter);
module.exports = routes;
