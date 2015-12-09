var fs = require('fs')
var hostname = require('os').hostname()
var ip = require('ip').address()
var Handlebars = require('handlebars')
var express = require('express')
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser())
app.post('/', function (req, res) {
  res.status(200).send(exports.template(req.body));
})

if (require.main === module) {
  app.listen(process.env.PORT || 4100);
}

var template = Handlebars.compile(fs.readFileSync('./template.yml', 'utf8'));
exports.template = function (opts) {
  // opts.labels = opts.labels || []
  return template(opts);
}

