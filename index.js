var connect = require('connect')
  , serveStatic = require('serve-static');

var createMiniHarp = function(path){
  var app = connect();
  app.use(serveStatic(path));
  return app;

}
module.exports = createMiniHarp;