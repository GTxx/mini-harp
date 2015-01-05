var connect = require('connect');

var createMiniHarp = function(){
  var app = connect();
  app.use(function(request, response, next){
    console.log(request.url);
    if (request.url == '/current-time') {
      response.end((new Date()).toISOString());
    } else {
      next();
    }
  })
  return app;

}
module.exports = createMiniHarp;