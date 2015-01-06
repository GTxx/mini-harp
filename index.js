var connect = require('connect')
  , makeJade = require('./lib/processor/jade.js')
  , makeLess = require('./lib/processor/less.js');

var createMiniHarp = function(path){
  var app = connect();
  app.use(function(req, res, next){
    if (req.url == '/'){
      req.url = "/index.html";
    }
    next();
  });
  app.use(makeJade(path));
  app.use(makeLess(path));
  return app;

}
module.exports = createMiniHarp;