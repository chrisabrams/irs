var sharp = require('sharp')

module.exports = function(options) {

  var transform = sharp()

  if(options.size) {

    if(options.size.width && options.size.height) {
      transform.resize(options.size.width, options.size.height)
    }

  }

  if(options.crop) {

    var cropOption;

    switch(options.crop) {

      case 'gravityNorth':
        cropOption = sharp.gravity.north
        break;

      default:
    }

    transform.crop(cropOption)
  }

  return transform

}
