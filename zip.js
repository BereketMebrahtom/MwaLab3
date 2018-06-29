var zlib = require('zlib');
var fs = require('fs');

var gZip = zlib.createGzip();
var text = fs.createReadStream(__dirname + "/plain.txt");
var zippedFIle = fs.createWriteStream(__dirname + "/destination.txt.gz");

text.pipe(gZip).pipe(zippedFIle);
