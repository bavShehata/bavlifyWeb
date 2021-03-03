const mongoose = require("mongoose");
const Contact = require("../models/contactModel");
const Portfolio = require("../models/portfolioModel");
const { body, validationResult } = require("express-validator");
require("dotenv/config");

const reg = {
  name: /^[a-z-_]{1,20}$/i,
  email: /^([^@]+)@(.+)\.(.+)$/i, //And send a confirmation Email anyways
  message: /^.{1,1000}$/s,
};
module.exports = {
  validateContact: (req, res, next) => {
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
    req.validInput = false;
    next();
    return;
  },
  sanitizeContact: [
    body("fname").escape().trim(),
    body("lname").escape().trim(),
    body("email").trim().normalizeEmail().escape(),
    body("message").trim().escape(),
  ],
  postContact: async (req, res) => {
    try {
      const { fname, lname, email, message } = req.body;
      if (!req.validInput) {
        // Input error not validated

        console.log("COULD NOT BE VALIDATED!!!", message);
        return;
      }
      console.log("All input is valid");
      // Create a contact in the database
      const contact = await Contact.create({
        fname,
        lname,
        email,
        message,
      });
      console.log("Contact created successfully: ", email);
      const portfolios = await Portfolio.find();
      console.log("Number of portfolios: ", portfolios.length);
      res.render("mainViews/index.ejs", { portfolios, contact: 1 });
      // res.redirect("/contact/success"); // Show a page indicating success
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
