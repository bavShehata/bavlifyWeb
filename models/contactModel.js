const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");

const ContactSchema = new Schema({
  fname: { type: String, Required: [true, "Please input a first name"] },
  lname: { type: String, Required: [true, "Please input a last name"] },
  email: {
    type: String,
    Required: [true, "Please input an email address"],
    lowercase: true,
    validate: [isEmail, "Please enter a valid Email"],
  },
  message: { type: String, Required: [true, "Please input a message"] },
});

const contact = mongoose.model("contact", ContactSchema);
module.exports = contact;
