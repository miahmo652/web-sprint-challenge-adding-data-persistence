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

router.post("/", (req, res) => {
    const projectData = req.body;
    if (!projectData || !projectData.name) {
        res.status(500).json({ message: "The project name is required" });
      } else {
    project
        .addProject(projectData)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to create new project" });
        });
      }
});

module.exports = router;