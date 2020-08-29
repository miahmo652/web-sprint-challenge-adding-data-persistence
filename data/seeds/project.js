
exports.seed = async function(knex) {
 await knex("project").insert([
   {
        name:"Complete Lambda school",
        description:"finish all the classes",
        completed: false
   },
   {

        name:"Get my first car",
        description:"Need a car soon to travel",
        completed: false

   },
   {

        name:"Buying a new house",
        description:"new house is needed",
        completed: false

   }

 ])
};
