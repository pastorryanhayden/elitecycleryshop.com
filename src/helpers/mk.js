var fs = require('fs');
var marked = require('marked');

module.exports = function(options) {
return new marked(options.fn(this));
}