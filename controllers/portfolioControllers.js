const mongoose = require('mongoose');
const Portfolio = require('../models/portfolioModel');
const uri = 'http://localhost:3000/portfolios';
const axios = require('axios');
module.exports = {
  //Show index page
  getIndex: async (req, res) => {
    try {
      // The Mongo way
      // const portfolios = await Portfolio.find();
      // The JSON-server way
      const result = await axios.get(uri);
      const portfolios = result.data;
      console.log('Number of portfolios: ', portfolios.length);
      res.render('mainViews/index.ejs', { portfolios, contact: 0 });
    } catch (e) {
      console.log("Couldn't show index page\n", e);
    }
  },
  //Show all portfolios
  getPortfolios: async (req, res) => {
    try {
      // const portfolios = await Portfolio.find();
      portfolios = [];
      console.log('Number of portfolios: ', portfolios.length);
      res.render('mainViews/index.ejs', { portfolios });
    } catch (e) {
      console.log("Couldn't show index page\n", e);
    }
  },
  // Delete all portfolios
  deletePortfolios: async (req, res) => {
    try {
      await Portfolio.deleteMany();
      console.log('All portfolios deleted successfully');
    } catch (e) {
      console.log("Couldn't delete all portfolios\n", e);
    }
  },
  // Portfolio form page
  portfolioForm: async (req, res) => {
    try {
      res.render('mainViews/portfolioOperations.ejs');
    } catch (e) {
      console.log("Couldn't delete all portfolios\n", e);
    }
  },
  // Add a portfolio
  addPortfolio: async (req, res) => {
    const { title, desktopURL, mobileURL, websiteURL } = req.body;
    try {
      console.log('obj');
      const portfolio = await Portfolio.create({
        title,
        desktopURL,
        mobileURL,
        websiteURL,
      });
      console.log('Portfolio created successfully: ', title);
    } catch (e) {
      console.log("Couldn't create portfolio\n", e);
    }
  },
  // Remove a portfolio by mobile link
  removePortfolio: async (req, res) => {
    const { mobileURL } = req.body;
    try {
      const deletedPorfolio = await Portfolio.findOneAndDelete({ mobileURL });
      console.log('Portfolio deleted successfully', deletePortfolio.title);
    } catch (e) {
      console.log("Couldn't delete portfolio\n", e);
    }
  },
};
