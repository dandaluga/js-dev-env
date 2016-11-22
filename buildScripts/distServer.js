import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/users', function (req, res) {
  res.json([
    {"id": 1,"firstName":"Dan","lastName":"DaLuga","email":"dan@gmail.com"},
    {"id": 2,"firstName":"Pam","lastName":"DaLuga","email":"pam@gmail.com"},
    {"id": 3,"firstName":"Samantha","lastName":"DaLuga","email":"samantha@gmail.com"},
    {"id": 4,"firstName":"Abel","lastName":"DaLuga","email":"abel@gmail.com"}
  ]);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
