let express = require("express");
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
  res.render("index", { title: "Home" });
};
module.exports.displayWorklistPage = (req, res, next) => {
  res.render("index", {
    title: "Worklist",
  });
};
module.exports.displayContactPage = (req, res, next) => {
  res.render("index", {
    title: "Contact",
  });
};
