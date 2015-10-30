var fs = require('fs')
var fileContents = process.argv[2]

fs.readFile(fileContents, function (err, contents) {
  var lines = contents.toString().split('\n').length - 1;
  console.log(lines);
})