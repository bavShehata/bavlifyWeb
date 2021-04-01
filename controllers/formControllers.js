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

      // Send me an email

      // Instantiate the SMTP server
      const smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com', //196:19   my dns 192.168.1.254#53
        port: 465,
        secure: true,
        auth: {
          user: process.env.gmailUser,
          pass: process.env.gmailPass,
        },
      });
      smtpTrans.verify(function (error, success) {
        if (error) {
          console.log('HERE IS THE ERROR\n', error);
        } else {
          console.log('Server is ready to take our messages');
        }
      });

      // Specify what the email will look like
      const mailOpts = {
        from: 'Your sender info here', // This is ignored by Gmail
        to: process.env.gmailUser,
        subject: 'New message from contact form at bavlifyweb.com',
        text: `${fname} ${lname} (${email}) says: ${message}`,
      };

      // Attempt to send the email
      smtpTrans.sendMail(mailOpts, (error, response) => {
        if (error) {
          console.log("Email couldn't be sent\n", error);
        } else {
          console.log('Email sent successfully');
        }
      });

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
  // getContactSuccess: async (req, res) => {
  //   try {
  //     res.render('mainViews/contactSuccess.ejs');
  //   } catch (e) {
  //     console.log("Couldn't show contact success page\n", e);
  //   }
  // },
};
