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
      const newTask = await Task.create(req.body)
      res.status(201).json(newTask)
    } catch(err) {
      next(err)
    }
})

module.exports = router;