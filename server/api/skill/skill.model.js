'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SkillSchema = new Schema({
  name: String,
  link: String,
  rating: Number,
  votes: [{ type: Schema.Types.ObjectId, ref: 'Vote' }]
});

module.exports = mongoose.model('Skill', SkillSchema);
