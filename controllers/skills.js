const skills = require("../models/skill");

module.exports = {
  index,
  showSkill,
  newSkill,
  create,
  destroy,
  editSkill,
  edit,
};

function index(req, res) {
  res.render("skills/index", { skills: skills.getSkills() });
}

function editSkill(req, res) {
  res.render("skills/edit", { skill: skills.getSkill(req.params.eid) });
}
function edit(req, res) {
  const id = parseString(req.params.id);
  skills.editSkill(req.body.skill);
  res.redirect("/skills/" + id);
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

function destroy(req, res) {
  skills.deleteSkill(req.params.bye);
  console.log(req.params.bye);
  res.redirect("/skills");
}
