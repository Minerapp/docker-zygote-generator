var tap = require('tap')
var template = require('./index').template 
 
 var expected = require('fs').readFileSync('./expected.yml', 'utf8')
tap.test('test tmplate', function (t) {
  t.plan(1)
  var tmpl = template({
    SERVICE: 'search',
    ENV: 'dev',
    "ENV-APP": "dev-search",
    REPO: 'search',
    BRANCH: 'dev',
    REGURL: 'localhost',
    LABELS: ["com.randomkey.random=1031"]
  })
  console.log(JSON.stringify({
    SERVICE: 'search',
    ENV: 'dev',
    "ENV-APP": "dev-search",
    REPO: 'search',
    BRANCH: 'dev',
    REGURL: 'localhost',
    LABELS: ["com.randomkey.random=1031"]
  }, null, 2))
  t.similar(tmpl.split('\n'), expected.split('\n'))
})

