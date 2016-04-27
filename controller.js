'use strict'
const fourSquareUtil = require('foursquarevenues');
const what3WordsUtil = require('geo.what3words');
const config = require('./config.js');
const Yelp = require('yelp');
const foursquare = (require('foursquarevenues'))(config.fsClientId, config.fsClientSecret);

const yelp = new Yelp({
  consumer_key: config.yelpoAuthConsumerKey,
  consumer_secret: config.yelpConsumerSecret,
  token: config.yelpoAuthToken,
  token_secret: config.yelpTokenSecret,
});

const what3WordsConfig = {
  apiKey: config.w3wAPIKey
};

const

module.exports = {
  mergeRestaurants: (req, res) => {
    yelp.search({term: "restaurant", location: 90210})
    .then(data => {
      res.json(data.businesses);
    }
  )

  foursquare.getVenues({near: 90210, query: 'restaurant'}, (error, venues) => {
      if (!error) {
          res.json(venues.response.venues);
      }
  });


}

}
