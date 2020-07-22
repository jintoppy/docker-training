var http = require('http');
var fs = require('fs');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!');
  fs.writeFile('trial.txt', "tjhis is  a  trial", () => {
    console.log('file generated');
  });
  res.end(); //end the response
}).listen(3333);

console.log('app listening on 3333');