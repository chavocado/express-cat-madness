// Node Server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');
var felines = require('./routes/felines');

// app.set('port', 5000);
app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended: true}));

// Data


//ROUTES
app.use('/felines', felines);
// app.get('/felines', function(req, res) {
//   res.send(cats);
// });
//
// app.post('/felines', function(req, res) {
//   cats.push(req.body.catName);
//   res.send(true);
// });

app.use('/', index);





app.listen(app.get('port'), function() {
  console.log('Server is ready on port:' + app.get('port'));
});
