const db = require("../data/config")

module.exports = {
    findById,
    getResources,
    addResource
};

function getResources(){
    return db("resource");
};

function findById(id){
    return db("project").where({id}).first();
}

function addResource(resource) {
    return db("resources")
        .insert(resource)
        .then(id => {
            return findById(id[0]);
        });
}