var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var fs = require('fs');

var connectionString = 'postgres://dronut:dronut@db:5432/api';

var db = pgp(connectionString);

var sql = fs.readFileSync('customers.sql').toString();

// add query functions

module.exports = {
  getAllCustomers: getAllCustomers,
  getSingleCustomer: getSingleCustomer,
  createCustomer: createCustomer,
  updateCustomer: updateCustomer,
  removeCustomer: removeCustomer
};


function getAllCustomers(req, res, next) {
  db.any('select * from Customer')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL customers'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}



function getSingleCustomer(req, res, next) {
  var custID = parseInt(req.params.id);
  db.one('select * from Customer where id = $1', custID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE customer'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function createCustomer(req, res, next) {

  db.none('insert into customer(name, email)' +
      'values(${name}, ${email}',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one puppy'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function updateCustomer(req, res, next) {
  db.none('update customer set name=$1, email=$2',
    [req.body.name, req.body.email, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated puppy'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function removeCustomer(req, res, next) {
  var custID = parseInt(req.params.id);
  db.result('delete from customer where id = $1', custID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} customer`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}