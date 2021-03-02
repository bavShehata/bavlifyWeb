const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const nodemailer = require("nodemailer");
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

// Hashing the password before getting it saved to database
ContactSchema.post("save", async function () {
  // prevents rehashing everytime a book gets added
  const { fname, lname, email, message } = this;
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
    } else {
      console.log("Email sent successfully");
    }
  });
});

const contact = mongoose.model("contact", ContactSchema);
module.exports = contact;
