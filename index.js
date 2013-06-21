var through = require('through')

module.exports = function() {
  return through(function write(data) {
    this.queue(JSON.stringify(data))
  })
}