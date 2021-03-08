const express = require('express');
const routes = require('./api');

const router = express.Router();

router.use('/', routes);

module.exports = router;
