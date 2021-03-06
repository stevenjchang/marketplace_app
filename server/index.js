const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./databaseInteractor/knex');
const IP = process.env.IP || 'localhost';
const PORT = process.env.PORT || '3000';
const app = express();

app.use(express.static(path.join(__dirname, '../public/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api', function(req, res) {
  res.status(200).send(JSON.stringify({hello: '123'}));
})
app.get('/posts', db.getPosts);
app.get('/db', db.selectTestTable);
app.post('/api/listings', db.createListing);
app.get('/api/listings', db.getListings);

app.listen(PORT, (err) => {
  if (err) { return console.log('Error occurred in server/index.js =>', err); }
  console.log(`Server is listening on PORT:${PORT}`);
});

module.exports = app;
