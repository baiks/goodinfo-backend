'use strict';
require('dotenv').config();
const axios = require('axios');
const schedule = require('node-schedule');
const { bitcoin, Sequelize } = require('../database/models');
module.exports = {
  InvokeBTCAPI: () => {
    const job = schedule.scheduleJob('*/5 * * * * *', function () {
      console.log('Scheduler Date', Date());
      axios
        .get(process.env.BTCAPI)
        .then((response) => {
          console.log(response.data[0][7]);

          bitcoin.count().then((count) => {
            if (count == 0) {
              bitcoin.create({ value: response.data[0][7] });
            } else {
              bitcoin.update({ value: response.data[0][7] }, { where: { id: 1 } });
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
};
