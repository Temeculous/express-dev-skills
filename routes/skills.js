var express = require("express");
var router = express.Router();
var skillsCont = require("../controllers/skills");

/* GET users listing. */
router.get("/", skillsCont.index);

module.exports = router;
