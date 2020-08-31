const express = require("express");
const task = require("../models/task");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const tasks = await task.getTasks();
        res.json(tasks);
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
try{
  if(!req.body || !req.body.description){
    res.status(500).json({message:"description is required" })
  }
const newtask = await task.addTask(req.body)
     
res.status(201).json(newtask)

}catch(err){
  next(err)

}
   
});

module.exports = router;