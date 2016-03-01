var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var ShiftSchema = new Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  volunteers: [{
    type: ObjectId,
    ref: 'User'
  }]
});

module.exports = mongoose.model('Shifts', ShiftSchema);