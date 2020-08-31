const db = require("../data/config")

module.exports = {
    getProjects,
    addProject,  
};

function getProjects(){
    return db("project");
}


function addProject(project) {
    return db('project').insert(project, 'id');
};

