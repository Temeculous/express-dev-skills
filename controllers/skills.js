const skills = require("../models/skill");

module.exports = {
  index,
  showSkill,
};

function index(req, res) {
  res.render("skills/index", { skills: skills.getSkills() });
}

function showSkill(req, res) {
  res.render("skills/show", { skill: skills.getSkill(req.params.id) });
}
