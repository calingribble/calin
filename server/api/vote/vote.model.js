'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VoteSchema = new Schema({
  ip: String,
  status: String,
  skill: [{ type: Schema.Types.ObjectId, ref: 'Skill' }]
});

module.exports = mongoose.model('Vote', VoteSchema);
