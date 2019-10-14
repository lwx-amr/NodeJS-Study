// ------------------------------ First Server --------------------------------
// Creating our first server in Node.JS
const http = require('http');
// var server = http.createServer(function(request, response){
//   console.log('Request was made: ' + request.url);
  // response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello from the server side');
// });
// server.listen(3030, '127.0.0.1');
// console.log('Hey there, I\'m listening to port 3030');

// ------------------------------ Streams, Buffers and pipes -------------------------
// Read and write data bit at a time
const fs = require('fs');
// var myReadStream = fs.createReadStream('./readStreams.txt', 'utf8'); // this createReadStream inherits from EventEmitter so we can know when we have the first chunck
// var myWriteStream = fs.createWriteStream('./writeStreams.txt');
// myReadStream.on('data', function(chunck){ // Will be emitted every time a chunck is received
//   console.log('New chunck received!!');
//   myWriteStream.write(chunck);
// });

// Pipe is quick way to do read and write streams with out manually list to readed chunck event ( line number 17 );
// myReadStream.pipe(myWriteStream);

// ----------------------------- Send text Example  ----------------------------------
// var server = http.createServer(function(req, res){
//   console.log('Request was made: ' + req.url);
//   res.writeHead(200, {'Content-Type' : 'text/plain'});
//   var myReadStream = fs.createReadStream('./readStreams.txt', 'utf8');
//   myReadStream.pipe(res);
// });
// server.listen(3000,'127.0.0.1');

// ----------------------------- Send HTML Example  ----------------------------------
// var server = http.createServer(function(req, res){
//   console.log('Request was made: ' + req.url);
//   res.writeHead(200,{'Content-Type':'text/html'});
//   var readedStream = fs.createReadStream('./index.html', 'utf8');
//   readedStream.pipe(res);
// });
// server.listen(3000,'127.0.0.1');

// ----------------------------- Send JSON Example  ----------------------------------
// var server = http.createServer(function(req, res){
//   console.log('Request was made: ' + req.url);
//   res.writeHead(200,{'Content-Type':'application/json'});
//   var myObj = {
//     name: 'Amr',
//     age: '21',
//     job: 'Software Engineer'
//   }
//   res.end(JSON.stringify(myObj));
// });
// server.listen(3000,'127.0.0.1');

// ----------------------------- Basic Routing Example  ----------------------------------
var server = http.createServer(function(req, res){
  var rout = req.url;
  console.log('Request made with :' + rout);
  if( rout === '/home' || rout === '/'){
    res.writeHead(200,{'Content-Type': 'text/html'});
    fs.createReadStream('./index.html','utf8').pipe(res);
  }else if ( rout === '/contact'){
    res.writeHead(200,{'Content-Type': 'text/html'});
    fs.createReadStream('./contact.html','utf8').pipe(res);
  }else if ( rout === '/api/hello'){
    res.writeHead(200,{'Content-Type': 'application/json'});
    var myObj = [
      {
        name: 'Amr',
        age: '21',
        job: 'Software Engineer'
      },{
        name: 'Sayed',
        age: '32',
        job: 'Software Architect'
      }
    ]
    res.end(JSON.stringify(myObj));
  }else{
    res.writeHead(200,{'Content-Type': 'text/html'});
    fs.createReadStream('./404.html','utf8').pipe(res);
  }
});
server.listen(3000,'127.0.0.1');
