let express = require("express");
let router = express.Router();
let indexController = require("../controller/index");
/* GET home page. */
router.get("/", indexController.displayHomePage);

/* GET home page. */
router.get("/home", indexController.displayHomePage);

/* GET Services page. */
//router.get("/Worklist", indexController.displayWorklistPage);

/* GET Contact page. */
router.get("/contactus", indexController.displayContactPage);

module.exports = router;
