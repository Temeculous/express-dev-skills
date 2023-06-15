const skills = require("../models/skill");

module.exports = {
  index,
  showSkill,
  newSkill,
  create,
};

function index(req, res) {
  res.render("skills/index", { skills: skills.getSkills() });
}

function showSkill(req, res) {
  res.render("skills/show", { skill: skills.getSkill(req.params.id) });
}

function newSkill(req, res) {
  res.render("skills/new");
}

function create(req, res) {
  skills.createSkill(req.body);
  res.redirect("/skills");
}
