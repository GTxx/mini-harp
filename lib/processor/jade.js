var path = require('path')
  , fs = require('fs')
  , jade = require('jade');

function makeJade(root){
  return function(req, res, next){
    if (path.extname(req.url) != '.html'){
      next();
    }
    var jadeFilePath = path.join(root, req.url).replace('.html', '.jade');
    fs.readFile(jadeFilePath, {encoding: 'utf-8'}, function(err, data){
      if (err){
        next();
      }else{
        res.end(jade.render(data));
      }
    })
  }
}
module.exports = makeJade;
