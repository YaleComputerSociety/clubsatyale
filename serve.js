// serve.js

// Server-related libraries
var express = require('express')
,   http = require('http')
;

var app = express();
var st = require('st')
var http = require('http')

http.createServer(
  st({ path: process.cwd()+'/front', url: 'clubsatyale' })
).listen(8080)

// app.use(require('compression')());
// app.use(require('st')({
// 	path: __dirname,
// 	url: "clubsatyale", // "static"
// 	cache: false,
// 	passthrough: false,
// }));

// app.use(function(req, res) {
// 	res.end("Failed to find your page.");
// })

// var server = http.createServer(app);

// process.on('exit', function() {
// 	console.log('Exit process');
// });

// server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
//   var addr = server.address();
//   console.log("Server listening at", addr.address + ":" + addr.port);
// });