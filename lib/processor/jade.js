var path = require('path')
  , fs = require('fs')
  , jade = require('jade');

function makeJade(root){
  return function(req, res, next) {
    if (path.extname(req.url) == '.html') {
      var htmlFilePath = path.join(root, req.url);
      fs.readFile(htmlFilePath, {encoding: 'utf-8'}, function(err, data){
        if (!err){
          res.writeHead(200, {'Content-Length': data.length, 'Content-Type': 'text/html; charset=UTF-8'})
          res.end(data);
        } else {
          var jadeFilePath = htmlFilePath.replace('.html', '.jade');
          fs.readFile(jadeFilePath, {encoding: 'utf-8'}, function (err, data) {
            if (err) {
              next();
            } else {
              var html_content = jade.render(data);
              res.writeHead(200, {'Content-Length': html_content.length, 'Content-Type': 'text/html; charset=UTF-8'})
              res.end(html_content);
            }
          })
        }
      })
    } else {
      next();
    }
  }
}
module.exports = makeJade;
