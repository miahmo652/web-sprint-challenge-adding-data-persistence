const db = require("../data/config")

module.exports = {
    getProjects,
    findbyId,
    addProject,
    resourcesByProjectId
};

function getProjects(){
    return db("project");
}

function findbyId(id) {
    return db("project").where({id}).first();
}

function addProject(project) {
    return db('projects').insert(project, 'id');
};

function resourcesByProjectId(id) {
    return db("project as p").where("p.id, id")
            .join("resources as r", "r.project_id", "p.id")
            .select("r.name", "r.description")
}

