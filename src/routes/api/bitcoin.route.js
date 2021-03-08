const express = require('express');
const BTCController = require('../../controllers/bitcoin.controller');

const router = express.Router();

router.get('/btc', BTCController.getBTC);

module.exports = router;
