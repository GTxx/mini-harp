var connect = require('connect')
  , makeJade = require('./lib/processor/jade.js');

var createMiniHarp = function(path){
  var app = connect();
  app.use(makeJade(path));
  return app;

}
module.exports = createMiniHarp;