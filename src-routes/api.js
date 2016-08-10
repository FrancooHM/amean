import Beer from '../lib/Beer'
var express = require('express');
var mongoose = require('mongoose');
var beerSchema = require('../models/Beer');
var router = express.Router();


/* BEER */
router.post('/beer', function(req, res, next) {
  var beer = new Beer(req.body.name,
    req.body.IBU,
    req.body.SRM,
    req.body.ABV,
    req.body.beerOrganolepticDescription,
    req.body.stock,
    req.body.breweryName,
    req.body.beerID,
    req.body.tapID,
    req.body.beerFantasyName);

  console.log(beer);

  var beerObject = new beerSchema(beer);

  //save returns a promise directly instead find that needs to call exec http://stackoverflow.com/questions/29736965/mongoose-error-on-promise-with-save
  beerObject.save().then((err, results) => {
    callbackHandler(res, err, results)
  });
});

router.post('/beer/stock', function(req, res, next) {
  console.log("req.body: " + req.body.beerID);
  beerSchema.findOne({
    "beerID": req.body.beerID
  }).exec((err, results) => {
    beerStockCallbackHandler(req, res, err, results)
  });
});

router.get('/beer', function(req, res, next) {

  //exec
  beerSchema.find({}).exec((err, results) => {
    callbackHandler(res, err, results)
  });

});

function beerStockCallbackHandler(req, res, err, results) {
  var beer = results;
  beer.stock = req.body.stock;

  var beerObject = new beerSchema(beer);

  beerObject.save().then((err, results) => {
    callbackHandler(res, err, results)
  });
}

function callbackHandler(res, err, results) {
  if (err) {
    console.log(err);
    res.status(500).send(err.message);
  } else {
    console.log(results);
    res.status(200).jsonp(results);
  }
};

module.exports = router;
