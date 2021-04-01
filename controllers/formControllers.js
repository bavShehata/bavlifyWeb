const mongoose = require('mongoose');
const Contact = require('../models/contactModel');
const Portfolio = require('../models/portfolioModel');
const { body, validationResult } = require('express-validator');
const axios = require('axios');
require('dotenv/config');

const reg = {
  name: /^[a-z-_]{1,20}$/i,
  email: /^([^@]+)@(.+)\.(.+)$/i, //And send a confirmation Email anyways
  message: /^[^\x05]{1,1000}$/,
};
module.exports = {
  validateContact: (req, res, next) => {
    // trim first and last names
    const { fname, lname, email, message } = req.body;
    if (
      reg.name.test(fname) &&
      reg.name.test(lname) &&
      reg.email.test(email) &&
      reg.message.test(message)
    ) {
      req.validInput = true;
      next();
      return;
    }
    // console.log(
    //   reg.name.test(fname),
    //   reg.name.test(lname),
    //   reg.email.test(email),
    //   reg.message.test(message)
    // );
    req.validInput = false;
    next();
    return;
  },
  sanitizeContact: [
    body('fname').escape().trim(),
    body('lname').escape().trim(),
    body('email').trim().normalizeEmail().escape(),
    body('message').trim().escape(),
  ],
  postContact: async (req, res) => {
    try {
      const { fname, lname, email, message } = req.body;
      if (!req.validInput) {
        // Input error not validated

        console.log('COULD NOT BE VALIDATED!!!', message);
        return;
      }
      console.log('All input is valid');
      // Create a contact in the database
      var contact = await Contact.create({
        fname,
        lname,
        email,
        message,
      });
      // JSON way
      console.log('Contact created successfully: ', email);
      // The mongo way
      // const portfolios = await Portfolio.find();
      // The JSON-server way
      // Email is only sent through mobile data, not uni wifi??????
      // uri = 'http://localhost:3000/portfolios?_sort=id&_order=desc';
      uri =
        'https://my-json-server.typicode.com/bavShehata/bavlifyWeb/portfolios';
      const result = await axios.get(uri);
      const portfolios = result.data;
      console.log('Number of portfolios: ', portfolios.length); // The JSON-server way
      res.render('mainViews/index.ejs', { portfolios, contactSuccess: 1 });
    } catch (e) {
      console.log("Couldn't add contact\n", e);
    }
  },
  getContactSuccess: async (req, res) => {
    try {
      res.render('mainViews/contactSuccess.ejs');
    } catch (e) {
      console.log("Couldn't show contact success page\n", e);
    }
  },
};
