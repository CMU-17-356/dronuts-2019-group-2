'use strict';

const express = require('express');
const path = require('path');
var router = express.Router();


// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

// App
const app = express();

// Static files
app.use(express.static(CLIENT_BUILD_PATH));
var router = express.Router();

var db = require('../queries');

// API
app.get('/api/customers', db.getAllCustomers);
app.get('/api/customers/:id', db.getSingleCustomer);
app.post('/api/customers', db.createCustomer);
app.put('/api/customers/:id', db.updateCustomer);
app.delete('/api/customers/:id', db.removeCustomer);


function getAllCustomers(req, res, next) {};
function getSingleCustomer(req, res, next) {};
function createCustomer(req, res, next){};
function updateCustomer(req, res, next) {};
function removeCustomer(req, res, next) {};

app.get('hi', function(request, response) {
	console.log("hi")
});
// All remaining requests return the React app, so it can handle routing.
app.use('*', function(request, response) {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


module.exports = router;

