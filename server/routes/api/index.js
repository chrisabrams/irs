var fs        = require('fs'),
    http      = require('http'),
    path      = require('path'),
    request   = require('request'),
    sharp     = require('sharp'),
    transform = require('../../lib/transform')

module.exports = function(server) {

  server.get('/:options/:imagePath(*)', function(req, res, next) {

    var options     = JSON.parse(req.param('options'))
    var imagePath   = req.param('imagePath')

    req
      .pipe(request(imagePath))   // Get the image requested
      .pipe(transform(options)) // Apply sharp settings
      .pipe(res)                  // Send data to browser

  })

}
