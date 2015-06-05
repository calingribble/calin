/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Skill = require('../api/skill/skill.model');


Skill.find({}).remove(function() {
  Skill.create({
    name : 'Mongoose',
    rating : 3
  }, {
    name : 'Git',
    rating : 3
  }, {
    name : 'Vim',
    rating : 3
  }, {
    name : 'Less/CSS',
    rating : 4
  }, {
    name : 'HTML',
    rating : 4
  }, {
    name : 'AngularJS',
    rating : 4
  }, {
    name : 'Javascript',
    rating : 4
  }, {
    name : 'NodeJS',
    rating : 3
  },  {
    name : 'MongoDB',
    rating : 3
  },  {
    name : 'ExpressJS',
    rating : 3
  },{
    name : 'Ruby on Rails',
    rating : 2
  });
});
