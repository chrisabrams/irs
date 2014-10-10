# Image Resizing Service

## Dependencies
- Python: if using brew to install packages below, you'll have to install Python through brew. Yes, this is retarded. `brew install python`
- [XQuartz](http://xquartz.macosforge.org/landing/)
- Libvips: `brew tap homebrew/science` then `brew install homebrew/science/vips --with-webp --with-graphicsmagick`
- `npm install`

## Start server

    `node index.js`

## Example fetch, sharp, and return to browser

    http://localhost:9000/%7B%22size%22:%7B%22width%22:720,%22height%22:480%7D%7D/http://photos.vanityfair.com/2014/10/06/5432e75974ed87dd423a382a_jennifer-lawrence-vanity-fair-11-november-cover-ss01.jpg
