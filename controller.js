'use strict'
const fourSquareUtil = require('foursquarevenues');
const what3WordsUtil = require('geo.what3words');
const config = require('./config.js');
var Yelp = require('yelp');
var foursquare = (require('foursquarevenues'))(config.fsClientId, config.fsClientSecret);

var yelp = new Yelp({
  consumer_key: config.yelpoAuthConsumerKey,
  consumer_secret: config.yelpConsumerSecret,
  token: config.yelpoAuthToken,
  token_secret: config.yelpTokenSecret,
});

const what3WordsConfig = {
  apiKey: config.w3wAPIKey
};

const params = {
  near: 90210,
  query: 'restaurant'
}

module.exports = {
  mergeRestaurants: (req, res) => {
  //   yelp.search({term: "restaurant", location: 90210})
  //   .then(data => {
  //     console.log(data.businesses);
  //   }
  // )

  foursquare.getVenues(params, function(error, venues) {
      if (!error) {
          res.json(venues);
      }
  });


}

}
