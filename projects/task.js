const express = require("express");
const task = require("../models/task");

const router = express.Router();

router.get("/task", async (req, res, next) => {
    try {
        const tasks = await task.getTasks();
        res.json(tasks);
    } catch (err) {
        next(err);
    }
});

router.post("/task", (req, res) => {
    task
    .addTask(req.body)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json({ message: "couldn't add task." });
    });
});

module.exports = router;