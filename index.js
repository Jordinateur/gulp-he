const through = require('through2')
const he = require('he')


module.exports = function(method, options) {

  return through.obj(function(file, encoding, done) {

    var processed, buffer;

    if(file.contents instanceof Buffer) {
      processed = he[method](file.contents.toString(), options),
      buffer = new Buffer(processed);

      file.contents = buffer;
    }

    this.push(file);
    return done();

  });

};