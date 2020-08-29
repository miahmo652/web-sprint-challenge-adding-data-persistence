
exports.up = async function(knex) {
await knex.schema.createTable("project", (table) =>{
table.increments("id");
table.text("name").notNull();
table.text("description");
table.bool("completed").defaultTo(false);
});  

await knex.schema.createTable("resource", (table)=>{
    table.increments("id")
    table.text("name").notNull();
    table.text("description");
    table.integer("project_id").references("id").inTable("project").notNull();
})
await knex.schema.createTable("task", (table)=>{
    table.increments("id");
    table.text("description").notNull();
    table.text("notes");
    table.bool("completed").defaultTo(false).notNull();
    table.integer("project_id").references("id").inTable("project").notNull();
})
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("task")
  await knex.schema.dropTableIfExists("resource")
  await knex.schema.dropTableIfExists("project")
};
