const mongoose = require('mongoose');
const Portfolio = require('../models/portfolioModel');
var uri =
  'https://my-json-server.typicode.com/bavShehata/bavlifyWeb/portfolios';
const axios = require('axios');
module.exports = {
  //Show index page
  getIndex: async (req, res) => {
    try {
      // The Mongo way
      // const portfolios = await Portfolio.find();
      // The JSON-server way
      // uri = 'http://localhost:3000/portfolios?_sort=id&_order=desc';
      uri =
        'https://my-json-server.typicode.com/bavShehata/bavlifyWeb/portfolios';
      const result = await axios.get(uri);
      const portfolios = result.data;
      console.log('Number of portfolios: ', portfolios.length);
      res.render('mainViews/index.ejs', { portfolios, contactSuccess: 0 });
    } catch (e) {
      console.log("Couldn't show index page\n", e);
    }
  },
  // Delete all portfolios
  deletePortfolios: async (req, res) => {
    try {
      // Mongo way
      await Portfolio.deleteMany();
      // JSON Way
      uri =
        'https://my-json-server.typicode.com/bavShehata/bavlifyWeb/portfolios';
      await axios.delete(uri);
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
      // Mongo way
      var portfolio = await Portfolio.create({
        title,
        desktopURL,
        mobileURL,
        websiteURL,
      });
      // JSON way
      uri =
        'https://my-json-server.typicode.com/bavShehata/bavlifyWeb/portfolios';
      portfolio = {
        title,
        desktopURL,
        mobileURL,
        websiteURL,
      };
      portfolio = JSON.stringify(portfolio);
      await axios.post(uri, portfolio, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Portfolio created successfully: ', title);
    } catch (e) {
      console.log("Couldn't create portfolio\n", e);
    }
  },
};
