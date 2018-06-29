var http = require('http');

var fs = require('fs');
http.createServer(function (req, res){
    var rs = fs.createReadStream(__dirname+'/image.jpg').pipe(res);
}).listen(8080,'127.0.0.1');