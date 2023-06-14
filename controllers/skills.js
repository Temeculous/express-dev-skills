const skills = require("../models/skill");

module.exports = {
  index,
};

function index(req, res) {
  res.render("skills/index", { skills: skills.getSkills() });
}
