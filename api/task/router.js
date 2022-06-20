// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try{
      const tasks = await Task.getAll()
      res.json(tasks.map((row) => {
        return {
            ...row,
            task_completed: !!row.task_completed
        }
      }))
    } catch(err) {
      next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
      const newTask = await Task.create({
        project_id: req.body.project_id,
        task_notes: req.body.notes.trim(),
        task_description: req.body.description,
      })
      res.status(201).json({
        ...newTask,
        task_completed: !!newTask.task_completed
      })
    } catch(err) {
      next(err)
    }
})

module.exports = router;