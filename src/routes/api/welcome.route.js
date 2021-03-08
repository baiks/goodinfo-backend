const express = require('express');

const welcomeRoute = express.Router();

welcomeRoute.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'API to Update BTC Value',
  });
});

module.exports = welcomeRoute;
