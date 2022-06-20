// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try{
      const resources = await Resource.getAll()
      res.json(resources)
    } catch(err) {
      next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
      const newResource = await Resource.create({
        resource_name: req.body.name.trim(),
        resource_description: req.body.description,
      })
      res.status(201).json(newResource)
    } catch(err) {
      next(err)
    }
})

module.exports = router;
