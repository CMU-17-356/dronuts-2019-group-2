'use strict';

const express = require('express');
const path = require('path');
//addon mongodb
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import donutRouter from './routes/donutRouter';
import userRouter from './routes/userRouter';


// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

// App
const app = express();

// Static files
var router = express.Router();

//addon mongodb
const db = mongoose.connect("mongodb://dronut:dronut@startups-shard-00-00-1kerq.azure.mongodb.net:27017,startups-shard-00-01-1kerq.azure.mongodb.net:27017,startups-shard-00-02-1kerq.azure.mongodb.net:27017/test?ssl=true&replicaSet=startups-shard-0&authSource=admin&retryWrites=true");
// setting body parser middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use('/api/donuts', donutRouter);
app.use('/api/users', userRouter);


app.use(express.static(CLIENT_BUILD_PATH));

// setting body parser middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// All remaining requests return the React app, so it can handle routing.
app.use('*', function(request, response) {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

// API routes
app.use('/api/donuts', donutRouter);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


module.exports = router;

