  var zlib = require('zlib');
  var fs = require('fs');

fs.readFile(__dirname + "/destination.txt.gz", function (err, data) {
    zlib.gunzip(data, (err, buffer) => {
        if (!err) {
            fs.writeFile(__dirname + "/text1.txt", buffer.toString(), function(){
                console.log("Unzipping is done!");
            });
        }
        else {
            console.log(err);
        }
    })
});