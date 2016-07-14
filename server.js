
var st = require('st')
var http = require('http')
var path = require('path')
var fs = require('fs')

// See https://github.com/isaacs/st.
var mount = st({ path: __dirname, url: '', passthrough: true })

// We're statically serving the files in this folder. When requests are made
// to files that don't exist (ie, when we're accessing a club: /clubsatyale/ydn)
// we want to return 404.html with status 200. That's to mimick the way github
// pages work.

// See http://stackoverflow.com/a/10047018.
http.createServer((req, res) => {
  function makeStaticServer(filename) {
    return function () {
      console.log('Serving '+filename+' for request to '+req.url)
      
      var filePath = path.join(__dirname, filename)
      var stat = fs.statSync(filePath)
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': stat.size
      })
      var readStream = fs.createReadStream(filePath)
      // We replaced all the event handlers with a simple call to readStream.pipe()
      readStream.pipe(res)
    }
  }
  
  // Little twist: we must serve index.html when the person requests the
  // root of the website.
  if (req.url === "/") {
    makeStaticServer('index.html')()
  } else {
    // If file not found... serve 404.html
    mount(req, res, makeStaticServer('404.html'))
  }
}).listen(8080);

console.log("Server is running.")