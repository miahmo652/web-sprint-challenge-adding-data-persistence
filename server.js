const express = require("express");

const projectRouter = require("./projects/project");
const resourceRouter = require("./projects/resource");
const taskRouter = require("./projects/task")


const server = express();
server.use(express.json());
server.use("/api/project", projectRouter);
server.use("/api/resource", resourceRouter);
server.use("/api/task", taskRouter);



server.get("/", (req, res) => {
  res.status(200).json({ message: "WELCOME TO WEB DATABASE SPRINT CHALLENGE " });
});

module.exports = server;