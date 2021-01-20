const namesRouter = require('express').Router()

const { names }= require('./names.json')

namesRouter.get('/', (request, response, next) => {  
  return response.json(names)
})

module.exports = namesRouter