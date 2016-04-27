'use strict'
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config.js');

var mongooseUsername = config.mongooseUsername;
var mongoosePassword = config.mongoosePassword;

mongoose.connect('mongodb://'+mongooseUsername+':'+mongoosePassword+'@ds032319.mlab.com:32319/merged-restaurants');

require('./routes.js')(app, express);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("http://localhost" + port)
});
