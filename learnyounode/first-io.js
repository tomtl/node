var fs = require('fs');

var fileContentsBuffer = fs.readFileSync(process.argv[2]);
var fileContentsString = fileContentsBuffer.toString();
var lines = fileContentsString.split("\n").length -1;

console.log(lines);