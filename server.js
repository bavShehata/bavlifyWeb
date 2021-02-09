//Environment variables
require("dotenv/config");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");
const path = require("path");
const axios = require("axios");
//Connect to database
const app = express();

const dbURI = `mongodb+srv://${process.env.dbUser}:${process.env.dbPass}@${process.env.clusterName}.jgkgp.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`;
mongoose
  .connect(dbURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(
    app.listen(8001, () => {
      console.log("Listening on port 8001");
    })
  )
  .catch((error) => console.log("Couldn't connect to database\n", error));

// middleware & static files
app.use(favicon(path.join(__dirname, "public/assets/hero", "logo.png")));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// register view engine
app.set("view engine", "ejs");

//Routes
// const bookRoutes = require("./routes/bookRoutes");
// const userRoutes = require("./routes/userRoutes");
const mainControllers = require("./controllers/mainControllers");

//User Routes
app.get("/", mainControllers.getIndex);
app.post("/", mainControllers.postContact);
app.get("/contact/success", mainControllers.getContactSuccess);
