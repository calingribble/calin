/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var vote = require('./vote.model');

exports.register = function(socket) {
  vote.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  vote.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('vote:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('vote:remove', doc);
}
