const express = require("express");
const project = require("../models/projects");

const router = express.Router();

router.get("/", async (req, res, next)=>{
    try {
        const projects = await project.getProjects()
        res.json(projects);

    } catch(err){
        next(err)
    }
});

router.post("/", async (req, res, next) => {
    try{
        if (!req.body || !req.body.name) {
            res.status(500).json({ message: "The project name is required" });
          }
          const newproject = await project.addProject(req.body)
     
          res.status(201).json(newproject)
    }catch(err){
        next(err)
    }
       
});

module.exports = router;