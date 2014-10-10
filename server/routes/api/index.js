var fs    = require('fs'),
    http  = require('http'),
    path  = require('path'),
    sharp = require('sharp')

module.exports = function(server) {

  server.get('/test/:imagePath(*)', function(req, res, next) {

    var imagePath = req.param('imagePath')

    // Starting with writing a .jpg
    var outputFile = fs.createWriteStream(path.join(__dirname, '/../../../test/output/file.jpg'))

    // Get the image that needs to be resized
    var get = http.get(imagePath, function(response) {

      var transformer = sharp().resize(640,480).crop(sharp.gravity.north)

      response
        .pipe(transformer) // Apply sharp settings
        .pipe(outputFile)  // Write the output of the final image to disk

      //req.pipe(response.pipe(transformer)) <-- not working

    })

    get.on('data', function(data) {
      console.log("got data")
      res.write(data)
    })

    get.on('end', function() {
      res.end()
    })

  })

}
