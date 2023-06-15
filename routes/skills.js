var express = require("express");
var router = express.Router();
var skillsCont = require("../controllers/skills");

/* GET users listing. */
router.get("/", skillsCont.index);
// GET new post view
router.get("/new", skillsCont.newSkill);
//GET /skills/edit
router.get("/edit/:eid", skillsCont.editSkill);
// GEt single Skill
router.get("/:id", skillsCont.showSkill);
//POST /skills
router.post("/", skillsCont.create);
//DELETE /skills/:id
router.delete("/:bye", skillsCont.destroy);

module.exports = router;
