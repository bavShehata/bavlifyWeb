//Environment variables
require('dotenv/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');
const axios = require('axios');
const { body, validationResult } = require('express-validator');
const cors = require('cors');
//Connect to database, just for the contacts, as portfolios are in JSON Server now
const app = express();

// 3.6 or later
var dbURI = `mongodb+srv://${process.env.dbUser}:${process.env.dbPass}@${process.env.clusterName}.jgkgp.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`;
//2.12 or later
dbURI = `mongodb://${process.env.dbUser}:${process.env.dbPass}@${process.env.clusterName}-shard-00-00.jgkgp.mongodb.net:27017,${process.env.clusterName}-shard-00-01.jgkgp.mongodb.net:27017,${process.env.clusterName}-shard-00-02.jgkgp.mongodb.net:27017/${process.env.dbName}?ssl=true&replicaSet=atlas-wdji3c-shard-0&authSource=admin&retryWrites=true&w=majority`;
console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
console.log(
  '------------------Server initiated-------------------\n',
);
mongoose
  .connect(dbURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(console.log('Connected to database\n Be Happy!!\n'))
  .catch((error) => console.log("Couldn't connect to database\n", error));

// with JSON Server, we can listen to the port without having to connect to db.
const port = process.env.PORT ?? 8001;
app.listen(port, () => {
  // console.log(`Listening on port ${port}`);
});
// middleware & static files
app.use(favicon(path.join(__dirname, 'public/assets/hero', 'logo.png')));
app.use(cors());
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
app.use((req, res) => {
  res.render('mainViews/404.ejs', { title: 404 });
});
