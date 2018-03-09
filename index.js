'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cats = require('./cats');
const dogs = require('./dogs');

const {PORT, CLIENT_ORIGIN} = require('./config');
const {dbConnect} = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const app = express();

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.use(bodyParser.json());


app.get('/api/cat', (req, res) => {
  res.json(cats[0]);
});

app.delete('/api/cat', (req, res) =>{
  cats.shift();
  res.json(cats[0]);

});

app.get('/api/dog', (req, res) =>{
  res.json(dogs[0]);
});

app.delete('/api/dog', (req, res) => {
  dogs.shift();
  res.json(dogs);
});




function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = {app};
