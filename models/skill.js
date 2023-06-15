const skills = [
  { skill: "Problem Solving", id: 8392 },
  { skill: "Quick Learner", id: 4530 },
  { skill: "Full-Stack Development", id: 5819 },
];

module.exports = {
  getSkills,
  getSkill,
  createSkill,
  deleteSkill,
  editSkill,
};

function getSkills() {
  return skills;
}

function editSkill(skill) {
  skills.find(skill => skill.id === id);
}

function getSkill(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function createSkill(skill) {
  skill.id = Math.floor(Math.random() * (9000 - 1 + 1)) + 1;
  skills.push(skill);
}

function deleteSkill(id) {
  id = parseInt(id);
  const vic = skills.findIndex((skill) => skill.id === id);
  skills.splice(vic, 1);
}
