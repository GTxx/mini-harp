var path = require('path')
  , fs = require('fs')
  , less = require('less');

function makeLess(root){
  return function(req, res, next){
    var extname = path.extname(req.url);
    if (extname != '.css'){
      next();
    } else {
      var cssFilePath = path.join(root, req.url);
      fs.readFile(cssFilePath, {encoding: 'utf-8'}, function(err, data){
        if (err){
          var lessFilePath = cssFilePath.replace('.css', '.less');
          fs.readFile(lessFilePath, {encoding: 'utf-8'}, function(err, data){
            if (err){
              next();
            } else {
              less.render(data, function(err, output){
                if (err){
                  next();
                } else{
                  res.end(output);
                }
              })
            }
          })
        } else {
          res.end(data);
        }
      })
    }
  }
}
module.exports = makeLess;
