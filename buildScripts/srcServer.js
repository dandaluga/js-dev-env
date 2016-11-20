import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/users', function (req, res) {
  res.json([
    {"id": 1,"firstName":"Dan","lastName":"DaLuga","email":"dan@gmail.com"},
    {"id": 2,"firstName":"Pam","lastName":"DaLuga","email":"pam@gmail.com"},
    {"id": 3,"firstName":"Samantha","lastName":"DaLuga","email":"samantha@gmail.com"},
    {"id": 4,"firstName":"Abel","lastName":"DaLuga","email":"abel@gmail.com"}
  ]);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
