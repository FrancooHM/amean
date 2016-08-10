'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var beerSchema = new Schema({
  beerID: { type: Number },
  tapID: { type: Number },
  name: { type: String },
  beerFantasyName: { type: String },
  IBU: { type: Number },
  SRM: { type: Number },
  ABV: { type: Number },
  beerOrganolepticDescription: { type: String },
  stock: { type: Number },
  breweryName: { type: String }
});

module.exports = mongoose.model('Beer', beerSchema);