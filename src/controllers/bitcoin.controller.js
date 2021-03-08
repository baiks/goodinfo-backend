const { bitcoin, Sequelize } = require('../database/models');
const { Op } = Sequelize;
class BTCController {
  /**
   * This method get Latest BTC update
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static async getBTC(req, res, next) {
    console.log('getBTC', JSON.stringify(req.body));
    bitcoin
      .findAll({
        limit: 1,
        order: [['id', 'DESC']],
      })
      .then(function (btc) {
        console.log('BTC: ' + JSON.stringify(btc));
        return res.status(200).send(btc);
      })
      .catch((err) => {
        console.log('Error', err);
        return res.status(400).send(err);
      });
  }
}

module.exports = BTCController;
