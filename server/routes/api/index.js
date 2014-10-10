var fs    = require('fs'),
    http  = require('http'),
    path  = require('path'),
    request = require('request'),
    sharp = require('sharp')

module.exports = function(server) {

  server.get('/test/:imagePath(*)', function(req, res, next) {

    var imagePath = req.param('imagePath')

    // Starting with writing a .jpg
    var outputFile = fs.createWriteStream(path.join(__dirname, '/../../../test/output/file.jpg'))

    var transformer = sharp().resize(640,480).crop(sharp.gravity.north)

    req
      .pipe(request(imagePath)) // Get the image requested
      .pipe(transformer)        // Apply sharp settings
      .pipe(res)                // Send data to browser

    /* cant seem to split a stream into two pipes :/ */  
      //.pipe(outputFile)         // Write the output of the final image to disk

  })

}
