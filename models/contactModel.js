const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const nodemailer = require('nodemailer');
const { isEmail } = require('validator');

const ContactSchema = new Schema({
  fname: { type: String, Required: [true, 'Please input a first name'] },
  lname: { type: String, Required: [true, 'Please input a last name'] },
  email: {
    type: String,
    Required: [true, 'Please input an email address'],
    lowercase: true,
    validate: [isEmail, 'Please enter a valid Email'],
  },
  message: { type: String, Required: [true, 'Please input a message'] },
});

// Sending me an email after a contact is saved
ContactSchema.post('save', async function () {
  const { fname, lname, email, message } = this;
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
});

const contact = mongoose.model('contact', ContactSchema);
module.exports = contact;
