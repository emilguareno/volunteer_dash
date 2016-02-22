var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Shifts Model
 * =============
 */
 
var Shifts = new keystone.List('Shifts');

Shifts.add({
	name: { type: String, required: true },
	startDate: { type: Types.Datetime, default: Date.now, required:true },
	endDate: { type: Types.Datetime, default: Date.now, required:true },
	volunteers: { type: Types.Relationship, ref: 'User', many: true, required:true, initial:false }
});

Shifts.register();
