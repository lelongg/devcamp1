const express  = require('express');
const app      = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const proxy = require('express-http-proxy');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(cors());


app.use('/api', proxy(process.env.API_URL || 'localhost:3010'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('dist'));
app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'), function () {
  console.log('Web Server listening on port ' + app.get('port'));
});
