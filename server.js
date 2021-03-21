//Environment variables
require('dotenv/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');
const axios = require('axios');
const { body, validationResult } = require('express-validator');

//Connect to database, just for the contacts, as portfolios are in JSON Server now
const app = express();

// 3.6 or later
var dbURI = `mongodb+srv://${process.env.dbUser}:${process.env.dbPass}@${process.env.clusterName}.jgkgp.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`;
//2.12 or later
dbURI = `mongodb://${process.env.dbUser}:${process.env.dbPass}@${process.env.clusterName}-shard-00-00.jgkgp.mongodb.net:27017,${process.env.clusterName}-shard-00-01.jgkgp.mongodb.net:27017,${process.env.clusterName}-shard-00-02.jgkgp.mongodb.net:27017/${process.env.dbName}?ssl=true&replicaSet=atlas-wdji3c-shard-0&authSource=admin&retryWrites=true&w=majority`;
// mongoose
//   .connect(dbURI, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true,
//   })
//   .then(
//     app.listen(8001, () => {
//       console.log("Listening on port 8001");
//       let width = 360;
//       let large = width * 0.56;
//       let medium = large * 0.674;
//       let small = large * 0.52;
//       console.log(large, medium, small);
//     })
//   )
//   .catch((error) => console.log("Couldn't connect to database\n", error));

// with JSON Server, we can listen to the port without having to connect to db.
app.listen(8001, () => {
  console.log('Listening on port 8001');
});

// connect to db just for the contacts
// mongoose
//   .connect(dbURI, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true,
//   })
//   .then(console.log('Connected to databse'))
//   .catch((error) => console.log("Couldn't connect to database\n", error));

// middleware & static files
app.use(favicon(path.join(__dirname, 'public/assets/hero', 'logo.png')));
app.use('/scripts', express.static(__dirname + '/node_modules/mailcheck/src/'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// register view engine
app.set('view engine', 'ejs');

//Routes
const formControllers = require('./controllers/formControllers');
const portfolioControllers = require('./controllers/portfolioControllers');

//User Routes
app.get('/', portfolioControllers.getIndex);
app.post(
  '/',
  formControllers.validateContact,
  formControllers.sanitizeContact,
  formControllers.postContact
);
app.get('/portfolio', portfolioControllers.portfolioForm);
app.post('/portfolio', portfolioControllers.addPortfolio);
app.get('/contact/success', formControllers.getContactSuccess);
app.use((req, res) => {
  res.render('mainViews/404.ejs', { title: 404 });
});
