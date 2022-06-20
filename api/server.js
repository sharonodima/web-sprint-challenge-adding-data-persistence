// build your server here and require it from index.js
const express = require("express")
const resourcesRouter = require("./resource/router")
const tasksRouter = require("./task/router")
const projectsRouter = require("./project/router")
const server = express()

server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use("/api/resources", resourcesRouter)
server.use("/api/tasks", tasksRouter)
server.use("/api/projects", projectsRouter)


server.use("*", (req, res) => {
    res.json({api: "up"})
})
module.exports = server