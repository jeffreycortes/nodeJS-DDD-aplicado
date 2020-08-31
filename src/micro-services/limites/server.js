'use strict';
// references
const config = require('./server-env-config.json');
const env = config[(process.env.SERVER_CONF || config.def).trim()];
const app = require('../../infrastructure/rest-client/app');
const api = require('./infrastructure/limites-api');
const express = require('express');

// constants
const PORT = env.PORT;
const HOST = env.HOST;

api(app, express).listen(PORT, HOST, ()=> {
  console.log(`Running on http://${HOST}:${PORT}`);
});
