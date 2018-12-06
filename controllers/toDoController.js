const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});

const mongoose = require('mongoose');
mongoose.connect('mongodb://josephfriesen:monkeyingaroundwithmongo14@ds061474.mlab.com:61474/todo-list');
const todoSchema = new mongoose.Schema({
  item: String
});
const Todo = mongoose.model('Todo', todoSchema);

module.exports = function(app) {
  app.get('/todo', function(request, response) {
    Todo.find({}, function(err, data) {
      if (err) {throw err;}
      else {
        response.render('todo', {todos: data});
      }
    });
  });

  app.post('/todo', urlencodedParser, function(request, response) {
    const newItem = Todo(request.body).save(function(err, data) {
      if (err) {throw err;}
      else {
        response.json(data);
      }
    });
  });

  app.delete('/todo/:item', function(request, response) {
    Todo.find({item: request.params.item.replace(/\-/g, ' ')}).remove(function(err, data) {
      if (err) {throw err;}
      else {response.json(data);}
    });
  });
}
