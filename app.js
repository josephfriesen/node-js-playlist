var http = require('http');
var fs = require('fs');

// // 12 Creating a Server

// var server = http.createServer(function(request, response) {
//   console.log('request made', request.url);
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Leave me alone.');
// });
//
// server.listen(3000, '127.0.0.1');
// console.log('Listening on port 3000');

// 14/15 Readable Streams / Writable Streams

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

myReadStream.on('data', function(chunk) {
  console.log('new chunk received');
  myWriteStream.write(chunk)
});

// 16 Pipes



// PRELIMINARY LESSONS

// // 10 Creating and Removing directories
// var fs = require('fs');
//
// fs.unlink('./stuff/writeMe.txt', function() {
//   fs.rmdir('stuff');
// });
// var data = fs.readFileSync('readMe.txt', 'utf8');
// fs.mkdir('stuff', function() {
//   fs.readFile('readMe.txt', 'utf8', function(err, data) {
//     fs.writeFile('./stuff/writeMe.txt', data, function() {return;});
//     if (err) {console.log(err);}
//   })
// });
//
// fs.writeFile('./stuff/writeMe.txt', data);
//
// fs.mkdirSync('shit'); // create directory, synchronous
// fs.rmdirSync('shit'); // delete directory, synchornous

// // 9 Reading and Writing files:
// var fs = require('fs');
// var readMe = fs.readFile('./readme.txt', 'utf8', function(err, data) {
//   fs.writeFile('writeMe.txt', data, function() {return;});
// });

// // 8 Event emitters
// var events = require('events');
// var util = require('util');
//
// var Person = function(name){
//   this.name = name;
// };
//
// util.inherits(Person, events.EventEmitter);
//
// var james = new Person('james');
// var maree = new Person('maree');
// var breen = new Person('breen');
// var people = [james, maree, breen];
//
// people.forEach(function(person){
//   person.on('speak', function(mssg){
//     console.log(person.name + 'said: ' + mssg);
//   });
// });
//
// james.emit('speak', 'hey, guysss');
