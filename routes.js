'use strict'
const controller = require('controller.js');

module.exports = (app, express) => {
  app.get('/', controller.mergeRestaurants);
}
