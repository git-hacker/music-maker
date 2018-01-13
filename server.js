var express = require('express')
var opn = require('opn')
var app = express()

var uri = 'http://localhost:' + port
console.log('Listening at ' + uri + '\n')
opn(uri)

var port = 8887
app.use('/', express.static(__dirname + '/'))
app.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')
  opn(uri)
})