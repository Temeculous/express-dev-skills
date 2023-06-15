var express = require("express");
var router = express.Router();
var skillsCont = require("../controllers/skills");

/* GET users listing. */
router.get("/", skillsCont.index);
// GEt single Skill
router.get("/:id", skillsCont.showSkill);

module.exports = router;
