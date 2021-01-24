const express = require('express')
const path = require('path')
const app = express()
const config = require('./utils/config')

const namesRouter = require('./controllers/names')

app.use(express.json())

app.use(express.static(path.join(__dirname, 'dist')))

app.use('/api/names', namesRouter)

app.listen(config.PORT, () => {
  console.log(`server started on port ${config.PORT}`)
})