var parseArgs = require('minimist')
  , createMiniHarp = require('./index.js');

var command = function(){
  var args = parseArgs(process.argv.slice(2));
  var port = args.port || 4000;
  var app = createMiniHarp();
  console.log("Starting mini-harp on http://localhost:" + port);
  app.listen(port);
}

module.exports = command;