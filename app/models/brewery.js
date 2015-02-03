
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Brewery schema
 */

var BrewerySchema = new Schema({
  name: { type: String, default: '' },
  url: { type: String, default: '' },
  booth: { type: Number, default: -1 },
  beers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Beer' }],
  established: Date
});

mongoose.model('Brewery', BrewerySchema);
