# Image Resizing Service

## Dependencies
- Python: if using brew to install packages below, you'll have to install Python through brew. Yes, this is retarded. `brew install python`
- [XQuartz](http://xquartz.macosforge.org/landing/)
- Libvips: `brew tap homebrew/science` then `brew install homebrew/science/vips --with-webp --with-graphicsmagick`

## Start server

    `node index.js`

## Example fetch, sharp, and write to disk

    http://localhost:9000/test/http://upload.wikimedia.org/wikipedia/commons/4/40/Flatiron_Building_NYC_c1903.jpg
