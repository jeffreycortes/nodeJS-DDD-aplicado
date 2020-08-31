const express = require('express'),
      bodyParser = require('body-parser'),
      compression = require('compression'),
      helmet = require('helmet'),
      path = require('path'),
      app = express(),
      cors = require('cors'),
      app_root = __dirname;

app.use( cors() );
app.use( compression() );
app.use( helmet() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: true}) );

module.exports = app;
