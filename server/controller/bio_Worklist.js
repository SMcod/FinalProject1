let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
//const { router } = require('../config/app');
let Worklist = require("../models/Worklist");

module.exports.DisplayWorklistlist = async (req, res, next) => {
  //< Mark function as async
  try {
    const Worklistlist = await Worklist.find(); //< Use of await keyword
    res.render("Worklist/list", {
      title: "Worklist list",
      Worklistlist: Worklistlist,
    });
  } catch (error) {
    console.error(error);
    //Handle error
    res.render("Worklist/list", {
      error: "Error on server",
    });
  }
};

module.exports.AddWorklist = (req, res, next) => {
  try {
    res.render("Worklist/add", {
      title: "Add Worklist",
    });
  } catch (err) {
    console.error(err);
    res.render("Worklist/list", {
      error: "Error on the server",
    });
  }
};

module.exports.ProcessWorklist = (req, res, next) => {
  try {
    let newWorklist = Worklist({
      Name: req.body.Name,
      Priority: req.body.Priority,
      Notes: req.body.Notes,
    });
    Worklist.create(newWorklist).then(() => {
      res.redirect("/bio_Worklist");
    });
  } catch (error) {
    console.error(error);
    res.render("Worklist/list", {
      error: "Error on the server",
    });
  }
};

module.exports.EditWorklist = async (req, res, next) => {
  try {
    const id = req.params.id;
    const WorklistToEdit = await Worklist.findById(id);
    res.render("Worklist/edit", {
      title: "Edit Worklist",
      Worklist: WorklistToEdit,
    });
  } catch (error) {
    console.error(err);
    res.render("Worklist/list", {
      error: "Error on the server",
    });
  }
};
module.exports.ProcessEditWorklist = (req, res, next) => {
  try {
    const id = req.params.id;
    let updateWorklist = Worklist({
      _id: id,
      Name: req.body.Name,
      Priority: req.body.Priority,
      Notes: req.body.Notes,
    });
    Worklist.findByIdAndUpdate(id, updateWorklist).then(() => {
      res.redirect("/bio_Worklist");
    });
  } catch (err) {
    console.error(err);
    res.render("Worklist/list", {
      error: "Error on the server",
    });
  }
};
module.exports.DeleteWorklist = (req, res, next) => {
  try {
    let id = req.params.id;
    Worklist.deleteOne({ _id: id }).then(() => {
      res.redirect("/bio_Worklist");
    });
  } catch (error) {
    console.error(err);
    res.render("Worklist/list", {
      error: "Error on the server",
    });
  }
};
