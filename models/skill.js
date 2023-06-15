const skills = [
  { name: "Problem Solving", id: 8392 },
  { name: "Quick Learner", id: 4530 },
  { name: "Full-Stack Development", id: 5819 },
];

module.exports = {
  getSkills,
  getSkill,
};

function getSkills() {
  return skills;
}

function getSkill(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}
