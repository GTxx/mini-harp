var connect = require('connect')
  , path = require('path')
  , makeJade = require('./lib/processor/jade.js')
  , makeLess = require('./lib/processor/less.js');

var createMiniHarp = function(dir_path){
  var app = connect();
  app.use(function(req, res, next){
    var ext = path.extname(req.url);
    if (ext == '.less' || ext == '.jade'){
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not Found')
    }
    next();
  })
  app.use(function(req, res, next){
    if (req.url == '/'){
      req.url = "/index.html";
    }
    next();
  });
  app.use(makeLess(dir_path));
  app.use(makeJade(dir_path));

  return app;

}
module.exports = createMiniHarp;