// build your `Task` model here
const db = require("../../data/dbConfig")

const getAll = () => {
  return db("tasks").join("projects", "projects.project_id", "tasks.project_id")
}

const getById = (task_id) => {
    return db("tasks").where("task_id", task_id).first()
}

const create = (task) => {
    return db("tasks").insert(task)
        .then(([task_id]) => {
            return getById(task_id)
        })
}

  module.exports = {
    getAll,
    create,
    getById
  }