// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try{
      const projects = await Project.getAll()
      res.json(projects.map((row) => {
        return {
            ...row,
            project_completed: !!row.project_completed
        }
      }))
    } catch(err) {
      next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
      const newProject = await Project.create(req.body)
      res.status(201).json({
        ...newProject,
        project_completed: !!newProject.project_completed
      })
    } catch(err) {
      next(err)
    }
})

module.exports = router;

