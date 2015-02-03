
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Brewery schema
 */

var BeerSchema = new Schema({
  name: { type: String, default: '' },
  style: { type: String, default: '' },
  booth: { type: Number, default: -1 },
});
