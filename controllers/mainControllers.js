const mongoose = require("mongoose");
const Contact = require("../models/contactModel");
const Portfolio = require("../models/portfolioModel");
var nodemailer = require("nodemailer");
require("dotenv/config");

module.exports = {
  //Show index page
  getIndex: async (req, res) => {
    try {
      const portfolios = await Portfolio.find();
      console.log("Number of portfolios: ", portfolios.length);
      res.render("mainViews/index.ejs", { portfolios });
    } catch (e) {
      console.log("Couldn't show index page\n", e);
    }
  },
  postContact: async (req, res) => {
    try {
      const { fname, lname, email, message } = req.body;
      const contact = await Contact.create({
        fname,
        lname,
        email,
        message,
      });
      console.log("Contact created successfully: ", email);

      // Instantiate the SMTP server
      const smtpTrans = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.gmailUser,
          pass: process.env.gmailPass,
        },
      });

      // Specify what the email will look like
      const mailOpts = {
        from: "Your sender info here", // This is ignored by Gmail
        to: process.env.gmailUser,
        subject: "New message from contact form at bavlifyweb.com",
        text: `${fname} ${lname} (${email}) says: ${message}`,
      };

      // Attempt to send the email
      smtpTrans.sendMail(mailOpts, (error, response) => {
        if (error) {
          console.log("Email couldn't be sent\n", error);
          res.render("mainViews/index.ejs"); // Show a page indicating failure
        } else {
          res.redirect("/contact/success"); // Show a page indicating success
        }
      });
    } catch (e) {
      console.log("Couldn't add contact\n", e);
    }
  },
  getContactSuccess: async (req, res) => {
    try {
      res.render("mainViews/contactSuccess.ejs");
    } catch (e) {
      console.log("Couldn't show contact success page\n", e);
    }
  },
};
