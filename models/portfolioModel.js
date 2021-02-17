const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
  title: { type: String, Required: true, unique: true },
  desktopURL: { type: String, Required: true, unique: true },
  mobileURL: { type: String, Required: true, unique: true },
  websiteURL: { type: String, Required: true, unique: true },
});

const portfolio = mongoose.model("portfolio", PortfolioSchema);
module.exports = portfolio;
