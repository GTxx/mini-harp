var parseArgs = require('minimist')
  , createMiniHarp = require('./index.js')
  , path = require('path');

var command = function(){
  var args = parseArgs(process.argv.slice(2));
  var port = args.port || 4000;
  var dir_path = args.path || path.join(process.cwd(), args._[0] || "");
  var app = createMiniHarp(dir_path);
  console.log("Starting mini-harp on http://localhost:" + port);
  app.listen(port);
}

module.exports = command;