var bodyParser   = require('body-parser'),
    express      = require('express'),
    hbs          = require('hbs'),
    morgan       = require('morgan'),
    path         = require('path'),
    port         = 9000,
    serveStatic  = require('serve-static'),
    util         = require('util')

var server = express()

server.set('views', path.join(__dirname, '/public'))
server.set('view engine', 'hbs')
server.engine('hbs', hbs.__express)
server.use(serveStatic(__dirname + '/public'))
server.use(bodyParser.json())
server.use(morgan('combined'))
server.use(function(req, res, next) {

  req.start = Date.now()

  req.getResponseTime = function() {
    return Date.now() - req.start
  }

  next()

})

require('./server/routes/api/index')(server)

server.listen(port)

util.log('Express server instance listening on port ' + port)
