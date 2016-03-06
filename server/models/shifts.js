var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var ShiftSchema = new Schema({
  title: String,
  startsAt: Date,
  endsAt: Date,
  volunteers: [{
    type: ObjectId,
    ref: 'User'
  }],
  volunteersNeeded: Number
});

module.exports = mongoose.model('Shifts', ShiftSchema);