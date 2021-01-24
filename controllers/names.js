const namesRouter = require('express').Router()
const config = require('../utils/config')

const { names }= require(config.NAMEFILE_PATH)

namesRouter.get('/', (request, response, next) => {
  return response.json(names)
})

namesRouter.get('/getTotal', (request, response, next) => {
  const totalNames = names.reduce((sum, name) => { return (sum + name.amount) }, 0)
  return response.json(totalNames)
})

namesRouter.get('/:name', (request, response, next) => {
  const nameToFind = request.params.name.toLowerCase()
  const foundName = names.find(name => name.name.toLowerCase() === nameToFind)
  if(foundName) {
    return response.json(foundName)
  }
  else {
    return response.status(404).send('error, name not found in data')
  }
})

module.exports = namesRouter