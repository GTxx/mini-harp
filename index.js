var connect = require('connect')
  , makeJade = require('./lib/processor/jade.js')
  , makeLess = require('./lib/processor/less.js');

var createMiniHarp = function(path){
  var app = connect();
  app.use(makeLess(path));
  app.use(makeJade(path));
  return app;

}
module.exports = createMiniHarp;