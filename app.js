// imports
const http = require('http');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const toDoController = require('./controllers/toDoController');

// initialize
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.listen(3000);
console.log('Listening on port 3000');

// call controllers
toDoController(app);













// const urlencodedParser = bodyParser.urlencoded({ extended: false });
//
// app.set('view engine', 'ejs');
// app.use('/assets', express.static('assets'));
//
// app.get('/', function(request, response) {
//   response.render('index');
// });
//
// app.get('/contact', function(request, response) {
//   response.render('contact', {qs: request.query});
// });
//
// app.post('/contact', urlencodedParser, function(request, response) {
//   console.log(request.body);
//   response.render('contact-success', {data: request.body});
// });
//
// app.get('/profile/:name', function(request, response) {
//   const data = {
//     name: 'Joe',
//     salutation: 'Hi!',
//     height: 'really tall',
//     coolness: 'really cool',
//     numbers: [6, 1.5, 2, 88, -12]
//   }
//   response.render('profile', {data: data});
// })
//
// app.listen(3000);
// console.log('Listening on port 3000');

// var server = http.createServer(function(request, response) {
//   console.log('request made', request.url);
//   if (request.url === '/home' || request.url === '/') {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/index.html').pipe(response);
//   } else if (request.url === '/contact') {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/contact.html').pipe(response);
//   } else if (request.url === '/api/data') {
//     var myObj = fs.readFileSync('./data.json', 'utf8');
//     response.writeHead(200, {'Content-Type': 'application/json'});
//     response.end(JSON.stringify(myObj));
//   } else {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/404.html').pipe(response);
//   }
// });
//
// server.listen(3000, '127.0.0.1');
// console.log('Listening on port 3000');

// PRELIM

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
