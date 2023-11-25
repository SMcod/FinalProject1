let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
//const router = require("../config/app");
//let Work = require("../models/Worklist");
const Worklist = require("../models/Worklist");
let Worklistcontroller = require("../controller/bio_Worklist");

/* Get route for the Bio Books list */

// Read Operation
router.get("/", Worklistcontroller.DisplayWorklistlist);
/* Add operation */
//Get Router For Create Operation --> display the add book page
router.get("/add", Worklistcontroller.AddWorklist);
//Get Router For Create Operation --> process the add book page
router.post("/add", Worklistcontroller.ProcessWorklist);
//Get Router For Edit/Update Operation --> display the edit book page
router.get("/edit/:id", Worklistcontroller.EditWorklist);
//Get Router For Edit/Update Operation --> process the edit book page
router.post("/edit/:id", Worklistcontroller.ProcessEditWorklist);
//Get Router For Delete Operation
router.get("/delete/:id", Worklistcontroller.DeleteWorklist);
module.exports = router;
