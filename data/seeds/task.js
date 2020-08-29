
exports.seed = async function(knex) {
await knex("task").insert([
  {
    project_id: 1,
    description: "complete all projects",
    notes: "take notes",
    completed: false

  },
  {
    project_id: 1,
    description: "pass all sprints",
    notes: "complete sprints",
    completed: false
  },
  {
    project_id: 2,
    description: "search for a car",
    notes: "find a good car",
    completed: false

  },
  {
    project_id: 3,
    description: "search for a house",
    notes: "find a house everyone likes",
    completed: false
  }
])
};
