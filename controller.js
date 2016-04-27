'use strict'
const yelpUtil = require('node-yelp');
const foursquareUtil = require('node-foursquare');
const what3WordsUtil = require('geo.what3words');
const config = require('./config.js');

const yelpConfig = {
  consumerKey: config.yelpoAuthConsumerKey,
  consumerSecret: config.yelpConsumerSecret,
  token: config.yelpoAuthToken,
  tokenSecret: config.yelpTokenSecret
};

const foursquareConfig = {
  clientID: config.fsClientId,
  clientSecret: config.fsClientSecret
};

const what3WordsConfig = {
  apiKey: config.w3wAPIKey
};

module.exports = {
  mergeRestaurants: (req, res) => {
    

  }

}
