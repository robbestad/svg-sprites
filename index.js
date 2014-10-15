/*global require, __dirname */
'use strict';
var express = require('express')
    , compress = require('compression')
    , app = express();
    app.use(compress());   
app.get('/', function(req, res) {
      res.sendFile(__dirname +'/index.html');
  });
app.get(/^(.+)$/, function(req, res) {
  if ('production' == app.get('env')) {
    res.setHeader("Cache-Control", "public, max-age=0"); // 2419200 : 14 days
    res.setHeader("Expires", new Date(Date.now() + 1).toUTCString()); // 345600000
  }
  res.sendFile(__dirname +'/' + req.params[0]); 
});

// Listen for incoming requests and serve them.
app.listen(process.env.PORT || 3000);
