
exports.seed = async function(knex) {
await knex("resource").insert([
  {
    project_id: 1, 
    name: "computer",
    description:"you need a computer to do online classes and code"
  },
  {
    project_id: 1, 
    name: "visual studio code",
    description:"needed to code"
  },
  {
    project_id: 2, 
    name: "Money",
    description:"money needed to buy a car"
  },
  {
    project_id: 2, 
    name: "internet",
    description:"so you can look for good cars online"
  },
  {
    project_id: 3, 
    name: "real estate agent",
    description:"to help you look for a house"
  }
])
};
