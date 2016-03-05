var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var ShiftSchema = new Schema({
  name: String,
  startsAt: Date,
  endsAt: Date,
  volunteers: [{
    type: ObjectId,
    ref: 'User'
  }]
});

module.exports = mongoose.model('Shifts', ShiftSchema);